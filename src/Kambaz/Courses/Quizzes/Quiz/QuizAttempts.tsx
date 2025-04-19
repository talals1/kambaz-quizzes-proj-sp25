import { Form, FormCheck, ListGroup } from "react-bootstrap";

export default function QuizAttempts({
    attempt,
    questions,
}: {
    attempt: any;
    questions: any;
}) {
    return (
        <div>
            <h3>Attempts</h3>
            <br />
            <div>
                <ListGroup>
                    <div>
                        Score: {attempt.score}%
                    </div>
                    {questions.map((question: any) => (
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
                                                attempt.answers[question._id] === true
                                            }
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="false-answer"
                                            label="False"
                                            name={`bool-${question._id}`}
                                            checked={
                                                attempt.answers[question._id] === false
                                            }
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
                <br />
                <hr />
                <br />
            </div>
        </div>
    );
}
