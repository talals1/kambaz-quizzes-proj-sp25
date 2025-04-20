import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import EditorHeader from "./EditorHeader";
import QuestionsEditor from "./QuestionsEditor";
import QuizDetails from "./DetailsEditor/QuizDetails";

export default function QuizEditor() {
    const [activeTab, setActiveTab] = useState("details");
    const [pointTotal, setPointTotal] = useState(0);

    return (
        <div id="quiz-editor">
            <div>
                <EditorHeader pointTotal={pointTotal} setPointTotal={setPointTotal} />

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
                        <QuizDetails pointTotal={pointTotal} setPointTotal={setPointTotal} />
                    ) : (
                        <QuestionsEditor pointTotal={pointTotal} setPointTotal={setPointTotal} />
                    )}
                </div>
            </div>

            <hr />


        </div>
    );
}
