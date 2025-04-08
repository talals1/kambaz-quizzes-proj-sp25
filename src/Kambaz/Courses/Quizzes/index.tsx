import QuizControls from "./QuizControls";
import QuizControlButtons from "./QuizControlButtons";
import { useParams } from "react-router";
// import { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxRocket } from "react-icons/rx";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const dispatch = useDispatch();
    return (
        <div>
            {currentUser.role === "FACULTY" && (
                <QuizControls />
            )}
            <ListGroup className="rounded-0" id="wd-quizzes">
                <ListGroup.Item className="wd-quiz-list p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <TiArrowSortedDown />
                        Assignment Quizzes
                    </div>
                    <ListGroup className="wd-quizzes rounded-0">
                        {quizzes
                            .filter(
                                (quiz: any) => quiz.course === cid
                            )
                            .map(
                                (quiz: any) => (
                                    currentUser.role === "FACULTY" ? (
                                        <ListGroup.Item key={quiz._id} className="wd-quiz p-3 ps-2 d-flex align-items-center">
                                            <RxRocket style={{ color: "green" }}/>
                                            <div className="flex-grow-1">
                                                <h4>
                                                    <b>{quiz.title}</b>
                                                </h4>
                                                <p>
                                                    <text>
                                                        <b>Available</b> {quiz.availableDate}
                                                    </text>{" "}
                                                    | <b>Due</b> {quiz.dueDate} {" "}
                                                    | {quiz.points} pts | {quiz.qids.length} Questions
                                                </p>
                                            </div>
                                            <div>
                                                <QuizControlButtons quiz={quiz} />
                                            </div>
                                        </ListGroup.Item>
                                    ) : (
                                        quiz.published === "YES" && (
                                            <ListGroup.Item key={quiz._id} className="wd-quiz p-3 ps-2 d-flex align-items-center">
                                                <RxRocket style={{ color: "green" }}/>
                                                <div className="flex-grow-1">
                                                    <h4>
                                                        <b>{quiz.title}</b>
                                                    </h4>
                                                    <p>
                                                        <text>
                                                            <b>Available</b> {quiz.availableDate}
                                                        </text>{" "}
                                                        | <b>Due</b> {quiz.dueDate} {" "}
                                                        | {quiz.points} pts | {quiz.qids.length} Questions
                                                    </p>
                                                </div>
                                            </ListGroup.Item>
                                        )
                                    )
                                )
                            )}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}