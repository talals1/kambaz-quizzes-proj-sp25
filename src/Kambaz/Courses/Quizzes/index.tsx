import { Button } from "react-bootstrap";
import QuizEditor from "./Editor";

export default function Quizzes() {

    return (
        <div>
            <QuizEditor/>
            <br/>
            <hr/>
            <div className="d-flex justify-content-start gap-2">
                <Button
                    variant="secondary"
                >
                    Cancel
                </Button>
                <Button
                    variant="danger"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}