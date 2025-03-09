import { Button } from "react-bootstrap";
import QuizEditor from "./Editor";
import { useParams } from "react-router-dom";

export default function Quizzes() {
    const { cid } = useParams();

    return (
        <div>
            <QuizEditor/>
            <br/>
            <hr/>
            <div className="d-flex justify-content-start gap-2">
                <Button
                    href={`#/Kambaz/Courses/${cid}/Quizzes`}
                    variant="secondary"
                >
                    Cancel
                </Button>
                <Button
                    href={`#/Kambaz/Courses/${cid}/Quizzes`}
                    variant="danger"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}