import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";
import GreenCheckmark from "../../Modules/GreenCheckmark";
import { FaTimesCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function EditorHeader() {
    const { qid } = useParams(); // Retrieve qid from URL params
    const quizzes = useSelector((state: any) => state.quizReducer);
    //const currentQuiz = quizzes.find((q: any) => q._id === qid);

    return (
        <div className="d-flex align-items-center justify-content-end">
            <h5 className="me-2">
                Points
            </h5>
            <div className="d-flex align-items-center text-success">
                <GreenCheckmark className="me-1" />
                <span>Published</span>
            </div>
        
            <div className="d-flex align-items-center">
                <FaTimesCircle className="me-1" />
                <span>Not Published</span>
            </div>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}