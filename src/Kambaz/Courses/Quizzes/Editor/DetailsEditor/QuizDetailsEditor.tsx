import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Form,
    Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addQuiz, updateQuiz } from "../../reducer";
import * as coursesClient from "../../../client";
import * as quizzesClient from "../../client";
import ReactQuill from "react-quill";

export default function QuizDetailsEditor({
    setUseEditor,
}: {
    setUseEditor: (useEditor: boolean) => void;
}) {
    const dispatch = useDispatch();
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const { quizzes } = useSelector((state: any) => state.quizReducer);

    const quiz = quizzes.find((q: any) => {
        console.log(q);
        return q._id === qid;
    });

    // The quiz object we end up saving to
    let modifiedQuiz = quiz ? quiz : { _id: qid, course: cid };

    // Handles any change in any field
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        if (e.target.type === "checkbox") {
            modifiedQuiz = { ...modifiedQuiz, [e.target.id]: e.target.checked };
        } else {
            modifiedQuiz = { ...modifiedQuiz, [e.target.id]: e.target.value };
        }
    };

    const handleQuillChange = (value: any) => {
        modifiedQuiz = { ...modifiedQuiz, description: value };
    };

    const createNewQuiz = async () => {
        const createdQuiz = await coursesClient.createQuizForCourse(cid as string, modifiedQuiz);
        console.log("Creating quiz in reducer!")
        console.log("Quiz = ")
        console.log(modifiedQuiz);
        console.log("Created quiz from backend")
        console.log(createdQuiz)
        dispatch(addQuiz(modifiedQuiz));
    };
    const editQuiz = async () => {
        await quizzesClient.updateQuiz(modifiedQuiz);
        dispatch(updateQuiz(modifiedQuiz));
    };

    // Saves quiz data
    const saveQuiz = () => {
        if (quiz) {
            editQuiz();
        } else {
            createNewQuiz();
        }
        setUseEditor(false);
    };

    const saveAndPublishQuiz = () => {
        modifiedQuiz = { ...modifiedQuiz, published: true };
        saveQuiz()
        navigate(`/Kambaz/Courses/${cid}/Quizzes`)
    }

    const cancelHandler = () => {
        setUseEditor(false)
        navigate(`/Kambaz/Courses/${cid}/Quizzes`)
    }

    return (
        <Container className="p-4">
            <Form>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={quiz?.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                {/* TODO replace this with React Quill */}
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <ReactQuill
                        defaultValue={quiz?.description}
                        onChange={handleQuillChange}
                        placeholder="Enter quiz description..."
                    />
                </Form.Group>

                <Form.Group controlId="accessCode" className="mb-3">
                    <Col sm={5}>
                        <Form.Label>Access Code</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={quiz?.accessCode}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="type" className="mb-3">
                    <Form.Label column sm={2}>
                        Quiz Type
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select
                            defaultValue={quiz?.type}
                            onChange={handleChange}
                        >
                            <option>Graded Quiz</option>
                            <option>Practice Quiz</option>
                            <option>Graded Survey</option>
                            <option>Ungraded Survey</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="group" className="mb-3">
                    <Form.Label column sm={2}>
                        Quiz Group
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select
                            defaultValue={quiz?.group}
                            onChange={handleChange}
                        >
                            <option>Quizzes</option>
                            <option>Exams</option>
                            <option>Assignments</option>
                            <option>Project</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="timeLimit" className="mb-3">
                    <Form.Label column sm={2}>
                        Time Limit
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            defaultValue={quiz?.timeLimit}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Card className="mb-4" style={{ width: "36rem" }}>
                    <CardTitle>Options</CardTitle>
                    <CardSubtitle>
                        Various configuration options for quizzes
                    </CardSubtitle>
                    <CardBody>
                        <Form.Group className="mb-3">
                            {/* <Form.Label column sm={2}>
                                Options
                            </Form.Label> */}
                            {/* <Col sm={6}> */}
                            <Form.Check
                                id="shuffleAnswers"
                                type="checkbox"
                                label="Shuffle Answers"
                                defaultChecked={quiz?.shuffleAnswers}
                                onChange={handleChange}
                            />
                            <Form.Check
                                id="multipleAttempts"
                                type="checkbox"
                                label="Multiple Attempts"
                                defaultChecked={quiz?.multipleAttempts}
                                onChange={handleChange}
                            />
                            <Form.Check
                                id="showCorrectAnswers"
                                type="checkbox"
                                label="Show Correct Answers"
                                defaultChecked={quiz?.showCorrectAnswers}
                                onChange={handleChange}
                            />
                            <Form.Check
                                id="oneQuestionAtATime"
                                type="checkbox"
                                label="Show One Question at a Time"
                                defaultChecked={quiz?.oneQuestionAtATime}
                                onChange={handleChange}
                            />
                            <Form.Check
                                id="webcamRequired"
                                type="checkbox"
                                label="Webcam Required"
                                defaultChecked={quiz?.webcamRequired}
                                onChange={handleChange}
                            />
                            <Form.Check
                                id="lockAfterAnswering"
                                type="checkbox"
                                label="Lock Questions after Answering"
                                defaultChecked={quiz?.lockAfterAnswering}
                                onChange={handleChange}
                            />
                            {/* </Col> */}
                        </Form.Group>
                    </CardBody>
                </Card>

                <Card className="mb-4" style={{ width: "40rem" }}>
                    <Card.Body>
                        <Card.Title>Dates</Card.Title>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Available From
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="availableDate"
                                    type="date"
                                    defaultValue={quiz?.availableDate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Available Until
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="untilDate"
                                    type="date"
                                    defaultValue={quiz?.untilDate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Due Date
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="dueDate"
                                    type="date"
                                    defaultValue={quiz?.dueDate}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
            <div className="d-flex justify-content-center gap-2">
                <Button
                    variant="danger"
                    className="float-end"
                    onClick={saveAndPublishQuiz}
                >
                    Save & Publish
                </Button>
                <Button
                    variant="danger"
                    className="float-end"
                    onClick={saveQuiz}
                >
                    Save
                </Button>
                <Button
                    variant="secondary"
                    className="float-end"
                    onClick={() => cancelHandler}
                >
                    Cancel
                </Button>
            </div>
        </Container>
    );
}
