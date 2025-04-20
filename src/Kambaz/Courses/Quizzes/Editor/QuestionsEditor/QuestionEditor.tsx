import { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";

import * as questionsClient from "./client";
import * as quizzesClient from "../../client";
import { addQuestion, updateQuestion } from "./reducer";

export default function QuestionEditor() {
    const dispatch = useDispatch();
    const { cid, qid, questionID } = useParams();
    const navigate = useNavigate();

    const existingQuestion = useSelector((state: any) =>
        state.questionReducer.questions.find((q: any) => q._id === questionID)
    );

    const [formData, setFormData] = useState({
        _id: existingQuestion?._id || uuidv4(),
        quizID: qid,
        title: existingQuestion?.title || "",
        type: existingQuestion?.type || "multiple-choice",
        points: existingQuestion?.points || "",
        answers: existingQuestion?.answers || [],
        correctAnswer: existingQuestion?.correctAnswer || "",
        description: existingQuestion?.description || "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuillChange = (value: any) => {
        setFormData({ ...formData, description: value });
    };

    const createNewQuestion = async () => {
        await quizzesClient.createQuestionForQuiz(qid as string, formData);
        dispatch(addQuestion(formData));
    };
    const editQuestion = async () => {
        await questionsClient.updateQuestion(formData);
        dispatch(updateQuestion(formData));
    };

    const handleSubmit = () => {
        if (existingQuestion) {
            editQuestion();
        } else {
            createNewQuestion();
        }
        navigate(`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`);
    };

    return (
        <div id="wd-question-editor" className="p-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter question title"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Question Type</Form.Label>
                    <Form.Select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="multiple-choice">Multiple Choice</option>
                        <option value="true-false">True/False</option>
                        <option value="fill-in-the-blank">
                            Fill in the Blank
                        </option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                        type="number"
                        name="points"
                        value={formData.points}
                        onChange={handleChange}
                        placeholder="Enter points"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <ReactQuill
                        value={formData.description}
                        onChange={handleQuillChange}
                        placeholder="Enter question description..."
                    />
                </Form.Group>
                {formData.type === "multiple-choice" ||
                formData.type === "fill-in-the-blank" ? (
                    <Form.Group className="mb-3">
                        <Form.Label>Answer Choices</Form.Label>
                        <ListGroup>
                            {formData.answers.map((answer, index) => (
                                <ListGroup.Item
                                    key={index}
                                    className="d-flex align-items-center"
                                >
                                    <Form.Check
                                        type="radio"
                                        name="correctAnswer"
                                        checked={
                                            formData.correctAnswer === answer
                                        }
                                        onChange={() =>
                                            setFormData({
                                                ...formData,
                                                correctAnswer: answer,
                                            })
                                        }
                                        className="me-2"
                                    />
                                    <Form.Control
                                        type="text"
                                        value={answer}
                                        onChange={(e) => {
                                            const newAnswers = [
                                                ...formData.answers,
                                            ];
                                            newAnswers[index] = e.target.value;
                                            setFormData({
                                                ...formData,
                                                answers: newAnswers,
                                            });
                                        }}
                                        placeholder="Enter answer choice"
                                        className="me-2"
                                    />
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                answers:
                                                    formData.answers.filter(
                                                        (_, i) => i !== index
                                                    ),
                                            })
                                        }
                                    >
                                        <FaTrash />
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Button
                            className="mt-2"
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    answers: [...formData.answers, ""],
                                })
                            }
                        >
                            <FaPlus className="me-2" /> Add Answer
                        </Button>
                    </Form.Group>
                ) : (
                    formData.type === "true-false" && (
                        <Form.Group className="mb-3">
                            <Form.Label>Select the correct answer</Form.Label>
                            <Form.Check
                                type="radio"
                                name="correctAnswer"
                                label="True"
                                value="True"
                                checked={formData.correctAnswer === "True"}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        correctAnswer: "True",
                                    })
                                }
                            />
                            <Form.Check
                                type="radio"
                                name="correctAnswer"
                                label="False"
                                value="False"
                                checked={formData.correctAnswer === "False"}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        correctAnswer: "False",
                                    })
                                }
                            />
                        </Form.Group>
                    )
                )}
                {formData.type === "true-false" && (
                    <Form.Group className="mb-3">
                        <Form.Label>Select the correct answer</Form.Label>
                        <Form.Check
                            type="radio"
                            name="correctAnswer"
                            label="True"
                            value="True"
                            checked={formData.correctAnswer === "True"}
                            onChange={() =>
                                setFormData({
                                    ...formData,
                                    correctAnswer: "True",
                                })
                            }
                        />
                        <Form.Check
                            type="radio"
                            name="correctAnswer"
                            label="False"
                            value="False"
                            checked={formData.correctAnswer === "False"}
                            onChange={() =>
                                setFormData({
                                    ...formData,
                                    correctAnswer: "False",
                                })
                            }
                        />
                    </Form.Group>
                )}
                <hr />
                <div className="d-flex justify-content-end gap-2">
                    <Button
                        variant="secondary"
                        href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleSubmit}
                        href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`}
                    >
                        Save Question
                    </Button>
                </div>
            </Form>
        </div>
    );
}
