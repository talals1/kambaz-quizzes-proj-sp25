import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import { LuNotebookPen } from "react-icons/lu";

import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls />
            <br />
            <br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <TiArrowSortedDown />
                        ASSIGNMENTS
                        <div className="float-end">
                            <span className="border border-dashed rounded px-2 py-1">
                                40% of Total
                            </span>
                            <BsPlus />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item
                            action
                            href="#/Kambaz/Courses/1234/Assignments/123"
                            className="wd-lesson p-3 ps-2 d-flex align-items-center"
                        >
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookPen
                                className="me-2 fs-3"
                                style={{ color: "green" }}
                            />
                            <div className="flex-grow-1 ">
                                <h4>
                                    <b>A1</b>
                                </h4>
                                <p>
                                    <text className="text-danger">
                                        Multiple Modules
                                    </text>{" "}
                                    | <b>Not available until</b> May 6 at
                                    12:00am |
                                </p>
                                <p>
                                    <b>Due</b> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item
                            action
                            href="#/Kambaz/Courses/1234/Assignments/124"
                            className="wd-lesson p-3 ps-2 d-flex align-items-center"
                        >
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookPen
                                className="me-2 fs-3"
                                style={{ color: "green" }}
                            />
                            <div className="flex-grow-1">
                                <h4>
                                    <b>A2</b>
                                </h4>
                                <p>
                                    <text className="text-danger">
                                        Multiple Modules
                                    </text>{" "}
                                    | <b>Not available until</b> May 13 at
                                    12:00am |
                                </p>
                                <p>
                                    <b>Due</b> May 20 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item
                            action
                            href="#/Kambaz/Courses/1234/Assignments/125"
                            className="wd-lesson p-3 ps-2 d-flex align-items-center"
                        >
                            <BsGripVertical className="me-2 fs-3" />
                            <LuNotebookPen
                                className="me-2 fs-3"
                                style={{ color: "green" }}
                            />
                            <div className="flex-grow-1">
                                <h4>
                                    <b>A3</b>
                                </h4>
                                <p>
                                    <text className="text-danger">
                                        Multiple Modules
                                    </text>{" "}
                                    | <b>Not available until</b> May 20 at
                                    12:00am |
                                </p>
                                <p>
                                    <b>Due</b> May 27 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
