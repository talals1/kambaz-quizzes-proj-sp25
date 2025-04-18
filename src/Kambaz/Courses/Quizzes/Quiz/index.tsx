import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuizEditor from "../Editor";
import { formatDate } from "../../../../utils";
import * as coursesClient from "../../client";
import * as quizzesClient from "../client";
import { setQuizzes } from "../reducer";
import QuizAttempts from "./QuizAttempts";
import { setQuestions } from "../Editor/QuestionsEditor/reducer";

export default function Quiz() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [attempt, setAttempt] = useState({});
    const questions = useSelector(
        (state: any) => state.questionReducer.questions
    );
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const quiz = quizzes.find((q: any) => {
        return q._id === qid;
    });

    const fetchAttempts = async () => {
        const attempts = await quizzesClient.findTotalAttempts(qid as string);
        setTotalAttempts(attempts);
        const currentAttempt = await quizzesClient.findLatestQuizAttempt(
            qid as string
        );
        console.log(currentAttempt);
        setAttempt(currentAttempt);
    };
    const fetchQuestions = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(
            qid as string
        );
        console.log(questions);
        dispatch(setQuestions(questions));
    };
    useEffect(() => {
        fetchAttempts();
        fetchQuestions();
    }, [quiz]);

    return (
        <>
            {currentUser.role === "FACULTY" ? (
                <QuizEditor />
            ) : (
                <>
                    <br />
                    <h2>
                        <b>{quiz.title}</b>
                    </h2>

                    <hr />

                    <p className="my-1">
                        <b>Due</b> {formatDate(quiz.dueDate)}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Points</b> {quiz.points}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Questions</b> {quiz.qids.length}
                    </p>
                    <p className="my-1">
                        <b>Available</b> {formatDate(quiz.availableDate)} -{" "}
                        {formatDate(quiz.untilDate)}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Time Limit</b> {quiz.timeLimit} Minutes
                    </p>

                    <hr />

                    <br />
                    <div className="d-flex justify-content-center">
                        {totalAttempts < quiz.numberOfAttempts && (
                            <Button
                                variant="danger"
                                href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/take_quiz`}
                            >
                                Take the Quiz
                            </Button>
                        )}
                    </div>
                    <br />

                    <hr />
                    {totalAttempts > 0 && (
                        <QuizAttempts attempt={attempt} questions={questions} />
                    )}
                </>
            )}
        </>
    );
}
