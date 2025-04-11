import { useState } from "react";
import { Button } from "react-bootstrap";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizDetailsViewer from "./QuizDetailsViewer";

export default function QuizDetails() {

    const [useEditor, setUseEditor] = useState(false);

    return (
        <div>
            {!useEditor && <Button variant="danger" className="float-end" onClick={() => setUseEditor(!useEditor)}>Edit Details</Button>}
            <br/>
            {useEditor ? <QuizDetailsEditor setUseEditor={setUseEditor} /> : <QuizDetailsViewer  />}
        </div>
    )
}