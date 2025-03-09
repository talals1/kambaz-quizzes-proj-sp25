import { useState } from "react";
import DetailsEditor from "./DetailsEditor";
import EditorHeader from "./EditorHeader";
import QuestionsEditor from "./QuestionsEditor";
import { Button } from "react-bootstrap";

export default function QuizEditor() {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <div id="quiz-editor">
            <EditorHeader />
            <br />
            <hr />
            
            <div className="tabs">
                <Button 
                    className={activeTab === "details" ? "active bg-light text-dark border border-secondary" : "bg-light text-dark border border-secondary"} 
                    onClick={() => setActiveTab("details")}
                >
                    Details
                </Button>
                <Button 
                    className={activeTab === "questions" ? "active bg-light text-dark border border-secondary" : "bg-light text-dark border border-secondary"} 
                    onClick={() => setActiveTab("questions")}
                >
                    Questions
                </Button>
            </div>
            <br/>
            <div className="tab-content">
                {activeTab === "details" ? <DetailsEditor /> : <QuestionsEditor />}
            </div>
        </div>
    );
}