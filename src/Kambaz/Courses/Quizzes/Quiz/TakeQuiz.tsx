import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Alert, Button, Form, FormCheck, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as quizzesClient from "../client";
import * as coursesClient from "../../client"
import { setQuestions } from "../Editor/QuestionsEditor/reducer";
import { setQuizzes } from "../reducer";

export default function TakeQuiz() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const questions = useSelector((state: any) => state.questionReducer.questions);

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuestions = async () => {
        const questions = await quizzesClient.findQuestionsForQuiz(
            qid as string
        );
        console.log(questions);
        dispatch(setQuestions(questions));
    };
    useEffect(() => {
        fetchQuestions();
    }, []);

    const [answerList, setAnswerList] = useState({});

    const handleSubmit = async () => {
        const dateString = new Date().toISOString()

        const quizAttempt = {
            _id: uuidv4(),
            timestamp: dateString,
            user_id: currentUser._id,
            quiz_id: qid,
            answers: answerList,
        };
        console.log(quizAttempt);
        await quizzesClient.createQuizAttempt(qid as string, quizAttempt);
    };



    return (
        <div>
            {currentUser.role !== "STUDENT" && <Alert variant="danger">This is a preview of the published version of the quiz.</Alert>}

            <ListGroup>
                {questions
                    .map((question: any) => (
                        <ListGroup.Item key={question._id}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">
                                    <b>{question.title}</b>
                                </h4>
                            </div>
                            <hr />
                            {/* Source: https://stackoverflow.com/questions/39758136/how-to-render-html-string-as-real-html */}
                            <div dangerouslySetInnerHTML={{ __html: question.description }} /> 
                            <Form>
                                {question.type === "multiple-choice" &&
                                    question.answers.map(
                                        (answer: any, index: any) => (
                                            <Form.Check
                                                key={index}
                                                type="radio"
                                                id={`answer-${index}`}
                                                label={answer}
                                                name={`multi-${question._id}`}
                                                onChange={() => setAnswerList({ ...answerList, [question._id]: answer })}
                                            />
                                        )
                                    )}

                                {question.type === "true-false" && (
                                    <>
                                        <FormCheck
                                            type="radio"
                                            id="true-answer"
                                            label="True"
                                            name={`bool-${question._id}`}
                                            onChange={() => setAnswerList({ ...answerList, [question._id]: true })}
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="false-answer"
                                            label="False"
                                            name={`bool-${question._id}`}
                                            onChange={() => setAnswerList({ ...answerList, [question._id]: false })}
                                        />
                                    </>
                                )}

                                {question.type === "fill-in-the-blank" && (
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your answer here"
                                        onChange={(e) => setAnswerList({ ...answerList, [question._id]: e.target.value })}
                                    />
                                )}
                            </Form>
                        </ListGroup.Item>
                    ))}
            </ListGroup>


            <Button variant="secondary" href={`#/Kambaz/Courses/${cid}/Quizzes`} onClick={() => {
                handleSubmit();
            }}>
                Submit
            </Button>
        </div>
    );
}