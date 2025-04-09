import { useState } from "react";
import QuizEditor from "./Editor";
import QuizDetails from "./Details";
import { Button } from "react-bootstrap";

export default function MyQuizViewer() {
    const [useEditor, setUseEditor] = useState(false);
    

    return (
        <div>
            <Button>Preview</Button>
            <Button onClick={() => setUseEditor(!useEditor)}>Edit</Button>
            <hr />
            {useEditor ? <QuizEditor setUseEditor={setUseEditor} /> : <QuizDetails />}
        </div>
    )
}