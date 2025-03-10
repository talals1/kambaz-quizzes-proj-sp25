import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({
    assignmentId,
}: {
    assignmentId: string;
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cid } = useParams();

    const handleDelete = () => {
        const confirmed = window.confirm(
            "Are you sure you want to remove this assignment?"
        );
        if (confirmed) {
            dispatch(deleteAssignment(assignmentId));
            navigate(`#/Kambaz/Courses/${cid}/Assignments`);
        }
    };
    return (
        <div className="float-end ">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <FaTrash
                className="fs-4 text-danger"
                style={{ cursor: "pointer" }}
                onClick={handleDelete}
            />
        </div>
    );
}
