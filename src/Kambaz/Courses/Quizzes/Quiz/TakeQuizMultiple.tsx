import { Button, Form, FormCheck, ListGroup } from "react-bootstrap";

export default function TakeQuizMultiple(
    { questions, qid, setAnswerList, answerList, handleSubmit }
    :
    { questions: any; qid: string; setAnswerList: any; answerList: any; handleSubmit: any }) 
{

    return (
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

            <hr />
            <Button variant="secondary" onClick={() => {
                handleSubmit();
            }}>
                Submit
            </Button>
        </div>
    )
}