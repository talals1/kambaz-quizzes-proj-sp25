import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";
import GreenCheckmark from "../../Modules/GreenCheckmark";
import { FaTimesCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function EditorHeader() {
    const { qid } = useParams(); // Retrieve qid from URL params
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    // Find the quiz that matches the qid
    const currentQuiz = quizzes.find((quiz: any) => quiz._id === "Q101");

    // Determine if the quiz is published
    const isPublished = currentQuiz?.published === "YES";
    const points = currentQuiz?.points || "0"; // Default to 0 if undefined

    return (
        <div className="d-flex align-items-center justify-content-end">
            <h5 className="me-2">Points</h5>
            <h5 className="me-2">{points}</h5>
            {isPublished ? (
                <div className="d-flex align-items-center text-success">
                    <GreenCheckmark className="me-1" />
                    <span>Published</span>
                </div>
            ) : (
                <div className="d-flex align-items-center text-danger">
                    <FaTimesCircle className="me-1" />
                    <span>Not Published</span>
                </div>
            )}
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}