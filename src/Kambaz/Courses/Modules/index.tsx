import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
    addModule,
    editModule,
    updateModule,
    deleteModule,
    setModules,
} from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid!);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, [cid]);

    const addModuleHandler = async () => {
        const newModule = await coursesClient.createModuleForCourse(cid!, {
            name: moduleName,
            course: cid,
        });
        dispatch(addModule(newModule));
        setModuleName("");
    };

    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    return (
        <div>
            {currentUser?.role === "FACULTY" && (
                <ModulesControls
                    setModuleName={setModuleName}
                    moduleName={moduleName}
                    addModule={addModuleHandler}
                />
            )}
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.map((module: any) => (
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />{" "}
                            {!module.editing && module.name}
                            {module.editing && (
                                <FormControl
                                    className="w-50 d-inline-block"
                                    onChange={(e) =>
                                        dispatch(
                                            updateModule({
                                                ...module,
                                                name: e.target.value,
                                            })
                                        )
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({
                                                ...module,
                                                editing: false,
                                            });
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}{" "}
                            {currentUser?.role === "FACULTY" && (
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        removeModule(moduleId);
                                    }}
                                    editModule={(moduleId) =>
                                        dispatch(editModule(moduleId))
                                    }
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />{" "}
                                        {lesson.name} <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
