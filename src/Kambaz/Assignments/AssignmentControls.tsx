import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
    return (
        <div
            id="wd-assignments-controls"
            className="d-flex align-items-center justify-content-between gap-3"
        >
            <div className="d-flex align-items-center border rounded w-50 px-1 py-2">
                <FaSearch className="me-2 text-muted" />
                <input
                    type="text"
                    placeholder="Search..."
                    id="wd-search-assignment"
                    className="border-0 w-100"
                    style={{ outline: "none" }}
                />
            </div>

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
