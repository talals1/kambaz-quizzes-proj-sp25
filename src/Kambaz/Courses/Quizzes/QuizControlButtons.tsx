import { IoBan, IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate } from "react-router";
import { Dropdown, DropdownButton } from "react-bootstrap";
import * as quizzesClient from "./client";
import { useDispatch } from "react-redux";
import { deleteQuiz, updateQuiz } from "./reducer";
export default function QuizControlButtons({ quiz } : { quiz: any}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="float-end">
            {quiz.published === "YES" ? <GreenCheckmark /> :
            <IoBan style={{ color: "red" }}/> }
            <DropdownButton variant="secondary" title={<IoEllipsisVertical className="fs-4" />} onClick={(e) => e.preventDefault()} >
                <Dropdown.Item onClick={(e) => {
                        e.preventDefault();
                        navigate(`${quiz._id}`);
                    }}> Edit Quiz </Dropdown.Item>
                <Dropdown.Item onClick={async (e) => {
                        e.preventDefault();
                        await quizzesClient.deleteQuiz(quiz);
                        dispatch(deleteQuiz(quiz));
                    }}> Delete Quiz </Dropdown.Item>
                <Dropdown.Item onClick={async (e) => {
                        e.preventDefault();
                        let publish;
                        if (quiz.published === "YES") {
                            publish = {...quiz, published: "NO"};
                        } else {
                            publish = {...quiz, published: "YES"};
                        }
                        await quizzesClient.updateQuiz(publish);
                        dispatch(updateQuiz(publish));
                    }}> {quiz.published === "YES" ? ("Unpublish Quiz") : ("Publish Quiz") } </Dropdown.Item>
            </DropdownButton>
        </div>
    );
}