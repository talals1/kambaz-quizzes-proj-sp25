import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { quiz_attempts } from "../../../Database";
import { Form, FormCheck, ListGroup } from "react-bootstrap";
import * as quizzesClient from "../client"
import { setQuestions } from "../Editor/QuestionsEditor/reducer";
import { useEffect } from "react";

export default function QuizAttempts() {
    const { qid } = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const attempts = quiz_attempts.filter((qa: any) => {
        return qa.user_id === currentUser._id && qa.quiz_id === qid;
    })

    // TODO add latest attempt

    const questions = useSelector((state: any) => state.questionReducer.questions);

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
    

    return (
        <div>
            <h3>Attempts</h3>
            <br/>
            {attempts.map((attempt) => (
                <div>
                    <ListGroup>
                        {questions
                            .filter((question: any) => question.quizID === qid)
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
                                                        checked={attempt.answers[question._id] === answer}
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
                                                    checked={attempt.answers[question._id]}
                                                />
                                                <FormCheck
                                                    type="radio"
                                                    id="false-answer"
                                                    label="False"
                                                    name={`bool-${question._id}`}
                                                    checked={!attempt.answers[question._id]}
                                                />
                                            </>
                                        )}

                                        {question.type === "fill-in-the-blank" && (
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your answer here"
                                                value={attempt.answers[question._id]}
                                            />
                                        )}
                                    </Form>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                    <br/>
                    <hr/>
                    <br/>
                </div>
            ))}
        </div>
    )
}