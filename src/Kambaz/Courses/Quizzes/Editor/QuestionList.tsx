import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function QuestionList() {
    
    return (
        <div>
            <Button className="bg-light text-dark border border-secondary">
                <FaPlus className="me-2" /> New Question
            </Button>
        </div>
    )
}