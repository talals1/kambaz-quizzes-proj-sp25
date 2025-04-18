import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function QuizControls() {
    const navigate = useNavigate();

    return (
        <div>
            <InputGroup className="border rounded px-1 py-2">
                <InputGroup.Text className="bg-transparent border-0">
                    <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Search for Quiz"
                    id="wd-search-quiz"
                    className="border-0"
                    style={{ outline: "none" }}
                />
                <div className="d-flex gap-2">
                    <Button
                        id="wd-add-quiz"
                        variant="danger"
                        onClick={() => {
                            navigate(`${uuidv4()}`);
                        }}
                    >
                        <FaPlus
                            className="position-relative me-2"
                            style={{ bottom: "1px" }}
                        />
                        Quiz
                    </Button>
                    <Button id="wd-quiz-ellipses" variant="secondary">
                        <IoEllipsisVertical
                            className="position-relative me-2"
                            style={{ bottom: "1px" }}
                        />
                    </Button>
                </div>
            </InputGroup>
        </div>
    );
}
