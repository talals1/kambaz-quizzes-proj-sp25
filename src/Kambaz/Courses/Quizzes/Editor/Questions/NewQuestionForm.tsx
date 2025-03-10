import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, ListGroup } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
    addQuestion,
    updateCorrectAnswer,
    removeAnswer,
    updateAnswer,
} from "../../quizReducer";

export default function NewQuestionForm({ closeForm }) {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState({
        title: "",
        type: "multiple-choice",
        points: "",
        description: "",
        answers: [],
        correctAnswer: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };

    // Handle rich text editor change
    const handleDescriptionChange = (value) => {
        setQuestion({ ...question, description: value });
    };

    // Handle adding a new answer option
    const addAnswer = () => {
        setQuestion({ ...question, answers: [...question.answers, ""] });
    };

    // Handle updating an answer choice
    const handleUpdateAnswer = (index, value) => {
        dispatch(
            updateAnswer({
                questionId: question._id,
                answerIndex: index,
                newAnswer: value,
            })
        );
        setQuestion((prev) => {
            const updatedAnswers = [...prev.answers];
            updatedAnswers[index] = value;
            return { ...prev, answers: updatedAnswers };
        });
    };

    // Handle selecting the correct answer
    const handleSelectCorrectAnswer = (answer) => {
        dispatch(
            updateCorrectAnswer({
                questionId: question._id,
                correctAnswer: answer,
            })
        );
        setQuestion({ ...question, correctAnswer: answer });
    };

    // Handle deleting an answer
    const handleDeleteAnswer = (index) => {
        const answerToDelete = question.answers[index];
        dispatch(
            removeAnswer({ questionId: question._id, answer: answerToDelete })
        );
        setQuestion((prev) => {
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

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuestion(question));
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3 border rounded">
            <h4>Add New Question</h4>

            {/* Question Title */}
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={question.title}
                    onChange={handleChange}
                    placeholder="Enter question title"
                    required
                />
            </Form.Group>

            {/* Question Type Dropdown */}
            <Form.Group className="mb-3">
                <Form.Label>Question Type</Form.Label>
                <Form.Select
                    name="type"
                    value={question.type}
                    onChange={handleChange}
                >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="fill-in-the-blank">Fill in the Blank</option>
                </Form.Select>
            </Form.Group>

            {/* Points Input */}
            <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control
                    type="number"
                    name="points"
                    value={question.points}
                    onChange={handleChange}
                    placeholder="Enter points"
                    required
                />
            </Form.Group>

            {/* Rich Text Editor for Description */}
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <ReactQuill
                    value={question.description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter question description..."
                />
            </Form.Group>

            {/* Multiple Choice Answer Options */}
            {question.type === "multiple-choice" && (
                <Form.Group className="mb-3">
                    <Form.Label>Answer Choices</Form.Label>
                    <ListGroup>
                        {question.answers.map((answer, index) => (
                            <ListGroup.Item
                                key={index}
                                className="d-flex align-items-center"
                            >
                                <Form.Check
                                    type="radio"
                                    name="correctAnswer"
                                    checked={question.correctAnswer === answer}
                                    onChange={() =>
                                        handleSelectCorrectAnswer(answer)
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
                                    onClick={() => handleDeleteAnswer(index)}
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

            {/* True/False Answer Options */}
            {question.type === "true-false" && (
                <Form.Group className="mb-3">
                    <Form.Label>Select the correct answer</Form.Label>
                    <Form.Check
                        type="radio"
                        name="correctAnswer"
                        label="True"
                        value="True"
                        checked={question.correctAnswer === "True"}
                        onChange={() => handleSelectCorrectAnswer("True")}
                    />
                    <Form.Check
                        type="radio"
                        name="correctAnswer"
                        label="False"
                        value="False"
                        checked={question.correctAnswer === "False"}
                        onChange={() => handleSelectCorrectAnswer("False")}
                    />
                </Form.Group>
            )}

            {/* Fill in the Blank Answer */}
            {question.type === "fill-in-the-blank" && (
                <Form.Group className="mb-3">
                    <Form.Label>Correct Answer</Form.Label>
                    <Form.Control
                        type="text"
                        name="correctAnswer"
                        value={question.correctAnswer}
                        onChange={handleChange}
                        placeholder="Enter the correct answer"
                        required
                    />
                </Form.Group>
            )}

            {/* Submit & Cancel Buttons */}
            <div className="d-flex justify-content-end">
                <Button
                    variant="secondary"
                    className="me-2"
                    onClick={closeForm}
                >
                    Cancel
                </Button>
                <Button type="submit" variant="secondary">
                    Save Question
                </Button>
            </div>
        </Form>
    );
}
