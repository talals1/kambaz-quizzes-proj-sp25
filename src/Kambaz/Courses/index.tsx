import { Navigate, Route, Routes, useLocation, useParams } from "react-router";

import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor";
import Home from "./Home";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import ProtectedRoute from "../Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Quizzes from "./Quizzes";
import QuestionEditor from "./Quizzes/Editor/QuestionsEditor/QuestionEditor";
import Quiz from "./Quizzes/Quiz";
import { useEffect, useState } from "react";
import * as client from "./client.ts";
import TakeQuiz from "./Quizzes/Quiz/TakeQuiz";

export default function Courses() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const course = useSelector((state: any) =>
        state.coursesReducer.courses.find((course: any) => course._id === cid)
    );
    const { pathname } = useLocation();

    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid!);
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:aid"
                            element={
                                <ProtectedRoute>
                                    <AssignmentEditor />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="People" element={<PeopleTable users={users} />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<Quiz />} />
                        <Route
                            path="Quizzes/:qid/:questionID"
                            element={<QuestionEditor />}
                        />
                        <Route path="Quizzes/:qid/take_quiz" element={<TakeQuiz/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
