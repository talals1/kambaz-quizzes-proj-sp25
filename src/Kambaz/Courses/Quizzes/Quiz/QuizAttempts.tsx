import { Badge, Form, FormCheck, ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

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
                                    &nbsp;
                                    &nbsp;
                                    {attempt.answers[question._id][1]
                                        ?
                                        <Badge bg="success">Correct!</Badge>
                                        :
                                        <Badge bg="danger">Incorrect</Badge>
                                    }

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
                                                label={
                                                    <>
                                                        {answer}
                                                        &nbsp;
                                                        {question.correctAnswer === answer &&
                                                            <FaCheckCircle className="text-success" />}
                                                    </>
                                                }
                                                name={`multi-${question._id}`}
                                                checked={
                                                    attempt.answers[
                                                    question._id
                                                    ][0] === answer
                                                }
                                            />
                                        )
                                    )}

                                {question.type === "true-false" && (
                                    <>
                                        <FormCheck
                                            type="radio"
                                            id="true-answer"
                                            label={
                                                <>
                                                    True
                                                    &nbsp;
                                                    {question.correctAnswer &&
                                                        <FaCheckCircle className="text-success" />}
                                                </>
                                            }
                                            name={`bool-${question._id}`}
                                            checked={
                                                attempt.answers[question._id][0] === "true"
                                            }
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="false-answer"
                                            label={
                                                <>
                                                    False
                                                    &nbsp;
                                                    {!question.correctAnswer &&
                                                        <FaCheckCircle className="text-success" />}
                                                </>
                                            }
                                            name={`bool-${question._id}`}
                                            checked={
                                                attempt.answers[question._id][0] === "false"
                                            }
                                        />
                                    </>
                                )}

                                {question.type === "fill-in-the-blank" && (
                                    <>
                                        <b>Correct Answer:</b> &nbsp; {question.correctAnswer}
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your answer here"
                                            value={attempt.answers[question._id][0]}
                                        />
                                    </>

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
