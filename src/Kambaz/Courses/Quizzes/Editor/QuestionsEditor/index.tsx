import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

import QuestionList from "./QuestionList";
import { useState } from "react";
import QuestionEditor from "./QuestionEditor";

export default function QuestionsEditor() {
    const [showEditor, setShowEditor] = useState(false);
    const [selectedQuestionID, setSelectedQuestionID] = useState("");

    const openEditor = (id) => {
        setSelectedQuestionID(id);
        setShowEditor(true);
    };
    const closeEditor = () => {
        setShowEditor(false);
        setSelectedQuestionID("");
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
                    onClick={() => openEditor("")}
                >
                    <FaPlus className="me-2" /> New Question
                </Button>
            </div>
        </div>
    );
}
