import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button, Form, FormCheck, ListGroup } from "react-bootstrap";
import { useState } from "react";
export default function TakeQuiz() {
    const { cid, qid } = useParams();
    // const dispatch = useDispatch();
    const questions = useSelector((state: any) => state.questionReducer.questions);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const [submission, setSubmission] = useState([]);

    const quiz = quizzes.find((q: any) => {
        console.log(q);
        return q._id === qid
    });
    return (
        <div>
            {currentUser.role === "STUDENT" ? (
                // <div>TAKING QUIZ</div>
                // need to add the oneQuestionAtATime logic
                // {quiz.oneQuestionAtATime ? (
                    
                // ) : (
                // )}
                <ListGroup>
                    {questions
                        .filter((question: any) => question.quizID === qid)
                        .map((question: any) => (
                            <ListGroup.Item key={question._id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="mb-0">
                                        <b>{question.title}</b>
                                    </h4>
                                    {/* <div>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/${question._id}`}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline-secondary btn-danger text-dark"
                                            size="sm"
                                            onClick={() => {
                                                // dispatch(
                                                //     deleteQuestion(question._id)
                                                // );
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div> */}
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
                                                    // checked={
                                                    //     answer ===
                                                    //     question.correctAnswer
                                                    // }
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
                                                // checked={
                                                //     "True" ===
                                                //     question.correctAnswer
                                                // }
                                            />
                                            <FormCheck
                                                type="radio"
                                                id="false-answer"
                                                label="False"
                                                value="False"
                                                // checked={
                                                //     "False" ===
                                                //     question.correctAnswer
                                                // }
                                            />
                                        </>
                                    )}

                                    {question.type === "fill-in-the-blank" && (
                                        <Form.Control
                                            type="text"
                                            // defaultValue={question.correctAnswer}
                                            placeholder="Enter your answer here"
                                        />
                                    )}
                                </Form>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            ) : (
                <div>PREVIEWING QUIZ</div>
            )
            }
            <hr/>
            <Button variant="secondary">
                Submit
            </Button>
        </div>
    );
}