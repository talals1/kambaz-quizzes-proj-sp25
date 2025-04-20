import { useState } from "react";
import { Button } from "react-bootstrap";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizDetailsViewer from "./QuizDetailsViewer";
import { useParams } from "react-router-dom";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const [useEditor, setUseEditor] = useState(false);

    return (
        <div>
            {!useEditor && (
                <>
                    <Button
                        style={{ "margin": "3px" }}
                        variant="danger"
                        className="float-end"
                        onClick={() => setUseEditor(!useEditor)}
                    >
                        Edit Details
                    </Button>
                    <Button
                        style={{ "margin": "3px" }}
                        variant="danger"
                        className="float-end"
                        href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/take_quiz`}
                    >
                        Preview the Quiz
                    </Button>
                </>
            )}
            <br />
            {useEditor ? (
                <QuizDetailsEditor setUseEditor={setUseEditor} />
            ) : (
                <QuizDetailsViewer />
            )}
        </div>
    );
}
