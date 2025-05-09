import { Badge, Form, FormCheck, ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

export default function QuizAttempts({
    attempt,
    questions,
}: {
    attempt: any;
    questions: any;
}) {

    // Display only the questions for which this attempt as answers for.
    // This is for cases when a user tries to view their attempt for a quiz
    // that has had another question added to it after they last took it.
    const filteredQuestions = questions.filter((q: any) => q._id in attempt.answers);
    

    return (
        <div>
            <h3>Attempts</h3>
            <br />
            <div>
                <ListGroup>
                    <div>
                        Score: {attempt.score}%
                    </div>
                    {filteredQuestions.map((question: any) => (
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
                                                    {question.correctAnswer === "True" &&
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
                                                    {question.correctAnswer === "False" &&
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
                                        <b>Accepted Answers:</b> &nbsp; {question.answers.join(", ")}
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
