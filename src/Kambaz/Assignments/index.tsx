import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical, BsPlus } from "react-icons/bs";

import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaWpforms } from "react-icons/fa";

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
                        <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaWpforms className="me-2 fs-3" />
                            <div className="flex-grow-1 ">
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    className="wd-assignment-link"
                                >
                                    <h4>A1 - ENV + HTML</h4>
                                    <p>
                                        Multiple Modules |{" "}
                                        <b>Not available until</b> May 6 at
                                        12:00am|
                                    </p>
                                    <p>
                                        <b>Due</b> May 13 at 11:59pm | 100 pts
                                    </p>
                                </Link>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaWpforms className="me-2 fs-3" />
                            <div className="flex-grow-1">
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/124"
                                    className="wd-assignment-link"
                                >
                                    <h4>A2 - CSS + BOOTSTRAP</h4>
                                    <p>
                                        Multiple Modules |{" "}
                                        <b>Not available until</b> May 13 at
                                        12:00am|
                                    </p>
                                    <p>
                                        <b>Due</b> May 20 at 11:59pm | 100 pts
                                    </p>
                                </Link>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <FaWpforms className="me-2 fs-3" />
                            <div className="flex-grow-1">
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/125"
                                    className="wd-assignment-link"
                                >
                                    <h4>A3 - JAVASCRIPT + REACT</h4>
                                    <p>
                                        Multiple Modules |{" "}
                                        <b>Not available until</b> May 20 at
                                        12:00am|
                                    </p>
                                    <p>
                                        <b>Due</b> May 27 at 11:59pm | 100 pts
                                    </p>
                                </Link>
                            </div>
                            <AssignmentControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
