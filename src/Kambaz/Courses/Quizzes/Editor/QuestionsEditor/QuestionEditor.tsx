import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, ListGroup } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";

import { updateQuestion, addQuestion } from "./reducer";

import "react-quill/dist/quill.snow.css";

export default function QuestionEditor({ show, handleClose, questionID }) {
    const dispatch = useDispatch();
    console.log(questionID)

    // Retrieve the question from Redux state using questionID
    const existingQuestion = useSelector((state: any) =>
        state.questionReducer.questions.find((q: any) => q._id === questionID)
    );

    const [formData, setFormData] = useState({
        _id: uuidv4(),
        title: "",
        type: "multiple-choice",
        points: "",
        answers: [],
        correctAnswer: "",
        description: "",
    });

    // Load existing question data when questionID or existingQuestion changes
    useEffect(() => {
        if (existingQuestion) {
            setFormData(existingQuestion);
        } else {
            setFormData({
                _id: uuidv4(),
                title: "",
                type: "multiple-choice",
                points: "",
                answers: [],
                correctAnswer: "",
                description: "",
            });
        }
    }, [existingQuestion, questionID]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const addAnswer = () => {
        setFormData({ ...formData, answers: [...formData.answers, ""] });
    };

    const handleUpdateAnswer = (index, value) => {
        setFormData((prev) => {
            const updatedAnswers = [...prev.answers];
            updatedAnswers[index] = value;
            return { ...prev, answers: updatedAnswers };
        });
    };

    const handleSelectCorrectAnswer = (answer) => {
        setFormData({ ...formData, correctAnswer: answer });
    };

    const handleDeleteAnswer = (index) => {
        const answerToDelete = formData.answers[index];
        setFormData((prev) => {
            const updatedAnswers = prev.answers.filter((_, i) => i !== index);
            return {
                ...prev,
                answers: updatedAnswers,
                correctAnswer:
                    prev.correctAnswer === answerToDelete
                        ? ""
                        : prev.correctAnswer,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingQuestion) {
            dispatch(updateQuestion(formData));
        } else {
            dispatch(addQuestion(formData, qid));
        }
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {existingQuestion ? "Edit Question" : "Add New Question"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
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

                    <Form.Group className="mb-3">
                        <Form.Label>Question Type</Form.Label>
                        <Form.Select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="multiple-choice">
                                Multiple Choice
                            </option>
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
                            onChange={handleDescriptionChange}
                            placeholder="Enter question description..."
                        />
                    </Form.Group>

                    {formData.type === "multiple-choice" && (
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
                                                formData.correctAnswer ===
                                                answer
                                            }
                                            onChange={() =>
                                                handleSelectCorrectAnswer(
                                                    answer
                                                )
                                            }
                                            className="me-2"
                                        />
                                        <Form.Control
                                            type="text"
                                            value={answer}
                                            onChange={(e) =>
                                                handleUpdateAnswer(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter answer choice"
                                            className="me-2"
                                        />
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() =>
                                                handleDeleteAnswer(index)
                                            }
                                        >
                                            <FaTrash />
                                        </Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Button className="mt-2" onClick={addAnswer}>
                                <FaPlus className="me-2" /> Add Answer
                            </Button>
                        </Form.Group>
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
                                    handleSelectCorrectAnswer("True")
                                }
                            />
                            <Form.Check
                                type="radio"
                                name="correctAnswer"
                                label="False"
                                value="False"
                                checked={formData.correctAnswer === "False"}
                                onChange={() =>
                                    handleSelectCorrectAnswer("False")
                                }
                            />
                        </Form.Group>
                    )}

                    {formData.type === "fill-in-the-blank" && (
                        <Form.Group className="mb-3">
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control
                                type="text"
                                name="correctAnswer"
                                value={formData.correctAnswer}
                                onChange={handleChange}
                                placeholder="Enter the correct answer"
                                required
                            />
                        </Form.Group>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleSubmit}>
                    Save Question
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
