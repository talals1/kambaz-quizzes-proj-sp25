import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, FormCheck, ListGroup } from "react-bootstrap";
import * as quizzesClient from "../client";
import { setQuestions } from "../Editor/QuestionsEditor/reducer";
import { useEffect, useState } from "react";

export default function QuizAttempts({ attempt, questions } : { attempt: any; questions: any; }) {
    // const { qid } = useParams();
    // const dispatch = useDispatch();
    // const [attempt, setAttempt] = useState({});

    // const fetchAttempts = async () => {
    //     const attempt = await quizzesClient.findLatestQuizAttempt(
    //         qid as string
    //     );
    //     setAttempt(attempt);
    //     console.log(attempt);
    // };
    // useEffect(() => {
    //     fetchAttempts();
    // }, [qid]);

    // const questions = useSelector(
    //     (state: any) => state.questionReducer.questions
    // );

    // const fetchQuestions = async () => {
    //     const questions = await quizzesClient.findQuestionsForQuiz(
    //         qid as string
    //     );
    //     console.log(questions);
    //     dispatch(setQuestions(questions));
    // };
    // useEffect(() => {
    //     fetchAttempts();
    //     fetchQuestions();
    // }, [qid]);

    return (
        // console.log(attempt) &&
        <div>
            <h3>Attempts</h3>
            <br />
            <div>
                <ListGroup>
                    {questions
                        // .filter((question: any) => question.quizID === qid)
                        .map((question: any) => (
                            <ListGroup.Item key={question._id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="mb-0">
                                        <b>{question.title}</b>
                                    </h4>
                                </div>
                                <hr />
                                <p>{question.description}</p>
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
                                                    checked={
                                                        attempt.answers[
                                                            question._id
                                                        ] === answer
                                                    }
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
                                                checked={
                                                    attempt.answers[
                                                        question._id
                                                    ]
                                                }
                                            />
                                            <FormCheck
                                                type="radio"
                                                id="false-answer"
                                                label="False"
                                                name={`bool-${question._id}`}
                                                checked={
                                                    !attempt.answers[
                                                        question._id
                                                    ]
                                                }
                                            />
                                        </>
                                    )}

                                    {question.type === "fill-in-the-blank" && (
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your answer here"
                                            value={
                                                attempt.answers[question._id]
                                            }
                                        />
                                    )}
                                </Form>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
                <br />
                <hr />
                <br />
            </div>
        </div>
    );
}
