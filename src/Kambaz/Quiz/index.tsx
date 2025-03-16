import { useParams } from "react-router-dom";
import { quizzes } from "../Database";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";

export default function MyQuizzes() {
  const { cid } = useParams();

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };


  return (
    <div>

      <ListGroup className="wd-quizzes rounded-0">
        {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map(
            ({
              _id,
              title,
              availableFromDate,
              dueDate,
              points,
            }) => (
              <ListGroup.Item
                key={_id}
                action
                href={`#/Kambaz/Courses/${cid}/Quizzes/${_id}`}
                className="wd-quiz p-3 ps-2 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen
                  className="me-2 fs-3"
                  style={{ color: "green" }}
                />
                <div className="flex-grow-1">
                  <h4>
                    <b>{title}</b>
                  </h4>
                  <p>
                    <b>Not available until </b>
                    {formatDate(availableFromDate)}
                    &ensp;
                    |
                    &ensp;
                    <b>Due </b>
                    {formatDate(dueDate)}
                    &ensp;
                    |
                    &ensp;
                    {points} pts
                  </p>
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* <AssignmentControlButtons
                                        assignmentId={_id}
                                    /> */}
                </div>
              </ListGroup.Item>
            )
          )}
      </ListGroup>
      <p>hi</p>
    </div>
  )
}