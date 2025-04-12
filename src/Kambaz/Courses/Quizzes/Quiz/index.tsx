import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuizEditor from "../Editor";
import { formatDate } from "../../../../utils";
import * as coursesClient from "../../client";
import { setQuizzes } from "../reducer";
import { quiz_attempts } from "../../../Database";

export default function Quiz() {
    const { cid, qid} = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    const quiz = quizzes.find((q: any) => {
        console.log(q);
        return q._id === qid;
    });

    // need quiz_attempts data type to grab

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
                        {/* need to add check for if the user has an attempt left */}
                        <Button variant="danger" href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/take_quiz`}>Take the Quiz</Button>
                    </div>                  
                    <br/>

                    <hr />
                </>
            )}
        </>
    );
}
