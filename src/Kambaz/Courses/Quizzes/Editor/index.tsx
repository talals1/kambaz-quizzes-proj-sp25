import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import EditorHeader from "./EditorHeader";
import QuestionsEditor from "./QuestionsEditor";
import QuizDetails from "./DetailsEditor/QuizDetails";

export default function QuizEditor() {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <div id="quiz-editor">
            <div>
                <EditorHeader />

                <br />

                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === "details"}
                            onClick={() => setActiveTab("details")}
                        >
                            Details
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={activeTab === "questions"}
                            onClick={() => setActiveTab("questions")}
                        >
                            Questions
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <br />

                <div className="tab-content">
                    {activeTab === "details" ? (
                        <QuizDetails />
                    ) : (
                        <QuestionsEditor />
                    )}
                </div>
            </div>

            <hr />


        </div>
    );
}
