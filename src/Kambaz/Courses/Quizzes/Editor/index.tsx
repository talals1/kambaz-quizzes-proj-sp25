import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import EditorHeader from "./EditorHeader";
import QuestionsEditor from "./QuestionsEditor";
import QuizDetails from "./DetailsEditor/QuizDetails";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { setTotalPoints } from "./QuestionsEditor/reducer";


export default function QuizEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("details");

    // const { quizzes } = useSelector((state: any) => state.quizReducer);
    // const quiz = quizzes.find((q: any) => {
    //     return q._id === qid;
    // });

    // if (quiz) { 
    //     dispatch(setTotalPoints(quiz.points)); 
    // } else {
    //     dispatch(setTotalPoints(0)); 
    // }


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
