import { Button, Form, FormCheck, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function QuestionList({editQuestion}) {
    const { qid } = useParams(); // Retrieve qid from URL params
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    const questions = useSelector((state: any) => state.questionReducer.questions);

    // Find the current quiz
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);

    // Filter questions that match the qids in the current quiz
    const filteredQuestions = questions.filter((question: any) =>
        currentQuiz?.qids.includes(question._id)
    );

    return (
        <div>
            <ListGroup>
                {filteredQuestions.map((question) => (
                    <ListGroup.Item key={question._id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">
                                <b>{question.title}</b>
                            </h4>
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => {editQuestion(question._id)}}
                            >
                                Edit
                            </Button>
                        </div>
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
                                            answer === question.correctAnswer
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
