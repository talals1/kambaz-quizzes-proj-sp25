import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group controlId="wd-name" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                <Form.Group controlId="wd-description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify..."
                    />
                </Form.Group>

                <Form.Group as={Row} controlId="wd-points" className="mb-3">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" defaultValue={100} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-group" className="mb-3">
                    <Form.Label column sm={2}>
                        Assignment Group
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select>
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
                        <Form.Select>
                            <option>Percentage</option>
                            <option>Whole Number</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    controlId="wd-submission-type"
                    className="mb-3"
                >
                    <Form.Label column sm={2}>
                        Submission Type
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select>
                            <option>Online</option>
                            <option>In-Person</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Online Entry Options</Form.Label>
                    <div>
                        <Form.Check
                            type="checkbox"
                            label="Text Entry"
                            id="wd-text-entry"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Website URL"
                            id="wd-website-url"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Media Recordings"
                            id="wd-media-recordings"
                        />
                        <Form.Check
                            type="checkbox"
                            label="Student Annotation"
                            id="wd-student-annotation"
                        />
                        <Form.Check
                            type="checkbox"
                            label="File Uploads"
                            id="wd-file-upload"
                        />
                    </div>
                </Form.Group>

                <Form.Group as={Row} controlId="wd-assign-to" className="mb-3">
                    <Form.Label column sm={2}>
                        Assign To
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" defaultValue="Everyone" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Due
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" id="wd-due-date" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={6}>
                        <Form.Label>Available From</Form.Label>
                        <InputGroup>
                            <Form.Control type="date" id="wd-available-from" />
                            <InputGroup.Text>
                                <IoCalendarOutline />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col sm={6}>
                        <Form.Label>Until</Form.Label>
                        <InputGroup>
                            <Form.Control type="date" id="wd-available-until" />
                            <InputGroup.Text>
                                <IoCalendarOutline />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Form.Group>

                <hr />
                <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}
