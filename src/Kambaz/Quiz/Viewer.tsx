import { useState } from "react";
import QuizEditor from "./Editor";
import QuizDetails from "./Details";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function MyQuizViewer() {
    const { cid, qid } = useParams();
    const [useEditor, setUseEditor] = useState(false);


    return (
        <div>
            <Button>Preview</Button>
            <Button onClick={() => setUseEditor(!useEditor)}>Edit</Button>
            <hr />
            {useEditor ? <QuizEditor qid={qid} cid={cid} setUseEditor={setUseEditor} /> : <QuizDetails qid={qid} />}
        </div>
    )
}