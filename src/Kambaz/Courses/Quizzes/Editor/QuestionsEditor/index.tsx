import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

import QuestionList from "./QuestionList";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function QuestionsEditor() {
    const { cid, qid } = useParams();

    return (
        <div>
            <QuestionList />
            <br />
            <div className="d-flex justify-content-center ">
                <Button
                    className="bg-light text-dark border border-secondary"
                    href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor/${uuidv4()}`}
                >
                    <FaPlus className="me-2" /> New Question
                </Button>
            </div>
        </div>
    );
}
