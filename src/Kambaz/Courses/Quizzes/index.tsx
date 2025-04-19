import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxRocket } from "react-icons/rx";

import QuizControls from "./QuizControls";
import QuizControlButtons from "./QuizControlButtons";
import { formatDate } from "../../../utils";
import * as coursesClient from "../client";
import { setQuizzes } from "./reducer";

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        console.log(quizzes);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    return (
        <div>
            {currentUser.role === "FACULTY" && <QuizControls />}
            <ListGroup className="rounded-0" id="wd-quizzes">
                <ListGroup.Item className="wd-quiz-list p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <TiArrowSortedDown />
                        Assignment Quizzes
                    </div>
                    <ListGroup className="wd-quizzes rounded-0">
                        {quizzes.map((quiz: any) =>
                            currentUser.role === "FACULTY" ? (
                                <ListGroup.Item
                                    key={quiz._id}
                                    action
                                    className="wd-quiz p-3 ps-2 d-flex align-items-center"
                                    href={`#/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                                >
                                    <RxRocket style={{ color: "green" }} />
                                    <div className="flex-grow-1">
                                        <h4>
                                            <b>{quiz.title}</b>
                                        </h4>
                                        <p>
                                            <text>
                                                <b>Available</b>{" "}
                                                {formatDate(quiz.availableDate)}
                                            </text>{" "}
                                            | <b>Due</b>{" "}
                                            {formatDate(quiz.dueDate)} |{" "}
                                            {quiz.points} pts |{" "}
                                            {quiz.qids.length} Questions
                                        </p>
                                    </div>
                                    <div>
                                        <QuizControlButtons quiz={quiz} qid={quiz._id} />
                                    </div>
                                </ListGroup.Item>
                            ) : (
                                quiz.published && (
                                    <ListGroup.Item
                                        key={quiz._id}
                                        action
                                        className="wd-quiz p-3 ps-2 d-flex align-items-center"
                                        href={`#/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                                    >
                                        <RxRocket style={{ color: "green" }} />
                                        <div className="flex-grow-1">
                                            <h4>
                                                <b>{quiz.title}</b>
                                            </h4>
                                            <p>
                                                <text>
                                                    <b>Available</b>{" "}
                                                    {formatDate(
                                                        quiz.availableDate
                                                    )}
                                                </text>{" "}
                                                | <b>Due</b>{" "}
                                                {formatDate(quiz.dueDate)} |{" "}
                                                {quiz.points} pts |{" "}
                                                {quiz.qids.length} Questions
                                            </p>
                                        </div>
                                    </ListGroup.Item>
                                )
                            )
                        )}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
