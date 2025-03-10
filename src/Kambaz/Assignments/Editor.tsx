import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateAssignment, addAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) {
            return "";
        }
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
    };

    const existingAssignment = useSelector((state: any) =>
        state.assignmentReducer.assignments.find((a: any) => a._id === aid)
    );

    const [formData, setFormData] = useState({
        _id: existingAssignment?._id || uuidv4(),
        title: existingAssignment?.title || "",
        description: existingAssignment?.description || "",
        points: existingAssignment?.points || "",
        group: existingAssignment?.group || "ASSIGNMENTS",
        gradeType: existingAssignment?.gradeType || "Percentage",
        assignTo: existingAssignment?.assignTo || "",
        dueDate: existingAssignment?.dueDate || "",
        availableDate: existingAssignment?.availableDate || "",
        untilDate: existingAssignment?.untilDate || "",
        course: cid,
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSave = () => {
        if (existingAssignment) {
            dispatch(updateAssignment(formData));
        } else {
            dispatch(addAssignment(formData));
        }
        navigate(`#/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Assignment Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="description" className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Row} controlId="points" className="mb-3">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={formData.points}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="group" className="mb-3">
                    <Form.Label column sm={2}>
                        Assignment Group
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            value={formData.group}
                            onChange={handleChange}
                        >
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="gradeType" className="mb-3">
                    <Form.Label column sm={2}>
                        Display Grade as
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            value={formData.gradeType}
                            onChange={handleChange}
                        >
                            <option>Percentage</option>
                            <option>Whole Number</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="assignTo" className="mb-3">
                    <Form.Label column sm={2}>
                        Assign
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={formData.assignTo}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={4}>
                        <Form.Label>
                            <b>Due</b>
                        </Form.Label>
                        <Form.Control
                            type="date"
                            id="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>
                            <b>Available from</b>
                        </Form.Label>
                        <Form.Control
                            type="date"
                            id="availableDate"
                            value={formData.availableDate}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label>
                            <b>Until</b>
                        </Form.Label>
                        <Form.Control
                            type="date"
                            id="untilDate"
                            value={formData.untilDate}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <hr />
                <div className="d-flex justify-content-end gap-2">
                    <Button
                        href={`#/Kambaz/Courses/${cid}/Assignments`}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        href={`#/Kambaz/Courses/${cid}/Assignments`}
                        onClick={handleSave}
                        variant="danger"
                    >
                        Save
                    </Button>
                </div>
            </Form>
        </div>
    );
}
