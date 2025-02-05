import { FaSearch, FaPlus } from "react-icons/fa";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function AssignmentControls() {
    return (
        <div
            id="wd-assignments-controls"
            className="d-flex align-items-center justify-content-between gap-3"
        >
            <InputGroup className="border rounded px-1 py-2">
                <InputGroup.Text className="bg-transparent border-0">
                    <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Search..."
                    id="wd-search-assignment"
                    className="border-0"
                    style={{ outline: "none" }}
                />
            </InputGroup>

            <div className="d-flex gap-2">
                <Button variant="secondary" size="lg" id="wd-add-group">
                    <FaPlus
                        className="position-relative me-2"
                        style={{ bottom: "1px" }}
                    />
                    Group
                </Button>
                <Button variant="danger" size="lg" id="wd-add-assignment">
                    <FaPlus
                        className="position-relative me-2"
                        style={{ bottom: "1px" }}
                    />
                    Assignment
                </Button>
            </div>
        </div>
    );
}
