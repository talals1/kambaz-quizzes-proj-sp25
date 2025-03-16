import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Form, Nav, NavItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { quizzes } from "../Database";

export default function MyQuizEditor() {
    const { cid, qid } = useParams();
    const quiz = quizzes.find(q => q._id === qid)

    return (
        <Container className="p-4">
            <Nav variant="tabs" defaultActiveKey={`#/Kambaz/Courses/${cid}/Quizzes/${qid}`}>
                <Nav.Item>
                    <Nav.Link href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}`}>Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Questions</Nav.Link>
                </Nav.Item>
            </Nav>
            <Form>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={quiz?.title}
                    // onChange={handleChange}
                    />
                </Form.Group>

                {/* TODO replace this with React Quill */}
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        defaultValue={quiz?.description}
                    // onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="access_code" className="mb-3">
                    <Col sm={5}>
                        <Form.Label>Access Code</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={quiz?.access_code}
                        // onChange={handleChange}
                        />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} controlId="type" className="mb-3">
                    <Form.Label column sm={2}>
                        Quiz Type
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select
                            defaultValue={quiz?.quiz_type}
                        // onChange={handleChange}
                        >
                            <option>Graded Quiz</option>
                            <option>Practice Quiz</option>
                            <option>Graded Survey</option>
                            <option>Ungraded Survey</option>
                        </Form.Select>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} controlId="type" className="mb-3">
                    <Form.Label column sm={2}>
                        Quiz Group
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select
                            defaultValue={quiz?.group}
                        // onChange={handleChange}
                        >
                            <option>Quizzes</option>
                            <option>Exams</option>
                            <option>Assignments</option>
                            <option>Project</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="points" className="mb-3">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            defaultValue={quiz?.points}
                        // onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="points" className="mb-3">
                    <Form.Label column sm={2}>
                        Time Limit
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            defaultValue={quiz?.time_limit}
                        // onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Card className="mb-4" style={{width: "36rem"}}>
                    <CardTitle>
                        Options
                    </CardTitle>
                    <CardSubtitle>
                        Various configuration options for quizzes
                    </CardSubtitle>
                    <CardBody>
                        <Form.Group controlId="points" className="mb-3">
                            {/* <Form.Label column sm={2}>
                                Options
                            </Form.Label> */}
                            {/* <Col sm={6}> */}
                            <Form.Check type="checkbox" label="Shuffle Answers" defaultChecked={quiz?.shuffle} />
                            <Form.Check type="checkbox" label="Multiple Attempts" defaultChecked={quiz?.multi_attempts} />
                            <Form.Check type="checkbox" label="Show Correct Answers" defaultChecked={quiz?.show_correct_answers} />
                            <Form.Check type="checkbox" label="Show One Question at a Time" defaultChecked={quiz?.one_question_at_a_time} />
                            <Form.Check type="checkbox" label="Webcam Required" defaultChecked={quiz?.webcam_required} />
                            <Form.Check type="checkbox" label="Lock Questions after Answering" defaultChecked={quiz?.lock_after_answering} />
                            {/* </Col> */}
                        </Form.Group>
                    </CardBody>
                </Card>

                <Card className="mb-4" style={{width: "40rem"}}>
                    <Card.Body>
                        <Card.Title>Dates</Card.Title>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Available From
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" defaultValue={quiz?.availableFromDate} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Available Until
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" defaultValue={quiz?.availableUntilDate} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>
                                Due Date
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" defaultValue={quiz?.dueDate} />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>



            </Form>

        </Container>
    )
}