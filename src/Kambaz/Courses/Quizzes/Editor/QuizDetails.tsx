import { useState } from "react";
import { Button } from "react-bootstrap";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizDetailsViewer from "./QuizDetailsViewer";

export default function QuizDetails() {

    const [useEditor, setUseEditor] = useState(false);

    return (
        <div>
            <Button variant="danger" onClick={() => setUseEditor(!useEditor)}>Edit Details</Button>
            <hr />
            {useEditor ? <QuizDetailsEditor setUseEditor={setUseEditor} /> : <QuizDetailsViewer  />}
        </div>
    )
}