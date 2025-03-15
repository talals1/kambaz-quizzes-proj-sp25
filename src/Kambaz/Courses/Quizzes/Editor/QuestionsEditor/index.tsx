import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

import QuestionList from "./QuestionList";
import { useState } from "react";
import QuestionEditor from "./QuestionEditor";
import { useParams } from "react-router";

export default function QuestionsEditor() {
    const {cid, qid} = useParams();
    const [showEditor, setShowEditor] = useState(false);
    const [selectedQuestionID, setSelectedQuestionID] = useState(null);

    const openEditor = (id) => {
        console.log(id)
        setSelectedQuestionID(id);
        setShowEditor(true);
    };
    const closeEditor = () => {
        setShowEditor(false);
        setSelectedQuestionID(null);
    };

    return (
        <div>
            <QuestionList editQuestion={openEditor} />
            <br />
            <QuestionEditor
                show={showEditor}
                handleClose={closeEditor}
                questionID={selectedQuestionID}
            />
            <div className="d-flex justify-content-center ">
                <Button
                    className="bg-light text-dark border border-secondary"
                    onClick={() => openEditor(null)}
                >
                    <FaPlus className="me-2" /> New Question
                </Button>
            </div>
        </div>
    );
}
