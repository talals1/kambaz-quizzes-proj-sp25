import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router";
import * as db from "../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();

    const assignment = db.assignments.find((a) => a._id === aid);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
    };

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group controlId="wd-name" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={assignment?.title}
                    />
                </Form.Group>

                <Form.Group controlId="wd-description" className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        defaultValue={assignment?.description}
                    />
                </Form.Group>

                <Form.Group as={Row} controlId="wd-points" className="mb-3">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            defaultValue={assignment?.points}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-group" className="mb-3">
                    <Form.Label column sm={2}>
                        Assignment Group
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            defaultValue={assignment?.group.toUpperCase()}
                        >
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    controlId="wd-display-grade-as"
                    className="mb-3"
                >
                    <Form.Label column sm={2}>
                        Display Grade as
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select defaultValue={assignment?.gradeType}>
                            <option>Percentage</option>
                            <option>Whole Number</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-assign-to" className="mb-3">
                    <Form.Label column sm={2}>
                        Assign
                    </Form.Label>
                    <Col sm={10} className="border px-2 py-1">
                        <Form.Label>
                            <b>Assign to</b>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={assignment?.assignTo}
                        />
                        <br />
                        <Form.Group>
                            <Form.Label>
                                <b>Due</b>
                            </Form.Label>
                            <Form.Control
                                type="date"
                                id="wd-due-date"
                                defaultValue={formatDate(assignment?.dueDate)}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={6}>
                                <Form.Label>
                                    <b>Available from</b>
                                </Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="date"
                                        id="wd-available-from"
                                        defaultValue={formatDate(
                                            assignment?.dueDate
                                        )}
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}>
                                <Form.Label>
                                    <b>Until</b>
                                </Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="date"
                                        id="wd-available-until"
                                        defaultValue={formatDate(
                                            assignment?.dueDate
                                        )}
                                    />
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
                <hr />
                <div className="d-flex justify-content-end gap-2">
                    <Button
                        as={Link}
                        to={`/Kambaz/Courses/${cid}/Assignments`}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        as={Link}
                        to={`/Kambaz/Courses/${cid}/Assignments`}
                        variant="danger"
                    >
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
}
