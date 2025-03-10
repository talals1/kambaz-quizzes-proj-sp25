import { Form, FormCheck, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function QuestionList() {
    const { quizzes, questions } = useSelector(
        (state: any) => state.quizReducer
    );
    
    return (
        <div>
            <ListGroup>
                {questions.map((question) => (
                    <ListGroup.Item key={question._id}>
                        <div>
                            <h4>
                                <b>{question.title}</b>
                            </h4>
                            <hr />
                            <p>{question.description}</p>
                            <Form>
                                {question.type === "multiple-choice" &&
                                    question.answers.map((answer, index) => (
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
                                    ))}

                                {question.type === "true-false" && (
                                    <>
                                        <FormCheck
                                            type="radio"
                                            id="true-answer"
                                            label="True"
                                            value="True"
                                            checked={
                                                "True" ===
                                                question.correctAnswer
                                            }
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="false-answer"
                                            label="False"
                                            value="False"
                                            checked={
                                                "False" ===
                                                question.correctAnswer
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
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
