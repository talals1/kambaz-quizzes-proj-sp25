import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

import QuestionList from "./Questions/QuestionList";
import { useState } from "react";
import NewQuestionForm from "./Questions/NewQuestionForm";

export default function QuestionsEditor() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <QuestionList />
            <br/>
            {showForm && <NewQuestionForm closeForm={() => {setShowForm(false)}}/>}
            <hr />
            <Button
                className="bg-light text-dark border border-secondary"
                onClick={() => {setShowForm(true)}}
            >
                <FaPlus className="me-2" /> New Question
            </Button>
        </div>
    );
}
