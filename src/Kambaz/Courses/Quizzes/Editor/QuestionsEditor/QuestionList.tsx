import { useEffect } from "react";
import { Button, Form, FormCheck, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import * as quizzesClient from "../../client";
import { deleteQuestion, setQuestions } from "./reducer";

export default function QuestionList() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector(
        (state: any) => state.questionReducer.questions
    );

    const fetchQuestions = async () => {
        const quizQuestions = await quizzesClient.findQuestionsForQuiz(
            qid as string
        );
        console.log("gathered questions");
        console.log(quizQuestions);
        dispatch(setQuestions(quizQuestions));
    };
    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleDelete = async (questionId: string) => {
        await quizzesClient.removeQuestionFromQuiz(qid as string, questionId);
        dispatch(deleteQuestion(questionId));
    };

    return (
        <div>
            <ListGroup>
                {questions.map((question: any) => (
                    <ListGroup.Item key={question._id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">
                                <b>{question.title}</b>
                            </h4>
                            <div>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor/${question._id}`}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outline-secondary btn-danger text-dark"
                                    size="sm"
                                    onClick={() => {
                                        handleDelete(question._id);
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <p>{question.description}</p>
                        <Form>
                            {question.type === "multiple-choice" &&
                                question.answers.map(
                                    (answer: any, index: any) => (
                                        <FormCheck
                                            key={index}
                                            type="radio"
                                            id={`answer-${index}`}
                                            label={answer}
                                            value={answer}
                                            checked={
                                                answer ===
                                                question.correctAnswer
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
                                        value="True"
                                        checked={
                                            "True" === question.correctAnswer
                                        }
                                    />
                                    <FormCheck
                                        type="radio"
                                        id="false-answer"
                                        label="False"
                                        value="False"
                                        checked={
                                            "False" === question.correctAnswer
                                        }
                                    />
                                </>
                            )}

                            {question.type === "fill-in-the-blank" && (
                                <Form.Control
                                    type="text"
                                    defaultValue={question.correctAnswer}
                                    placeholder="Enter your answer here"
                                />
                            )}
                        </Form>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
