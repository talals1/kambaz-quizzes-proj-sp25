import { IoBan, IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate } from "react-router";
import { Dropdown, DropdownButton } from "react-bootstrap";
import * as quizzesClient from "./client";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz, updateQuiz } from "./reducer";
export default function QuizControlButtons({ quiz, qid } : { quiz: any, qid: string}) {
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    
    const the_quiz = quizzes.find((q: any) => q._id === qid)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div className="float-end">
            {the_quiz.published ? <GreenCheckmark /> :
            <IoBan style={{ color: "red" }}/> }
            <DropdownButton variant="secondary" title={<IoEllipsisVertical className="fs-4" />} onClick={(e) => e.preventDefault()} >
                <Dropdown.Item onClick={(e) => {
                        e.preventDefault();
                        navigate(`${the_quiz._id}`);
                    }}> Edit Quiz </Dropdown.Item>

                <Dropdown.Item onClick={async (e) => {
                        e.preventDefault();
                        await quizzesClient.deleteQuiz(the_quiz._id);
                        dispatch(deleteQuiz(the_quiz));
                    }}> Delete Quiz </Dropdown.Item>
                <Dropdown.Item onClick={async (e) => {
                        e.preventDefault();
                        const ispub =  !the_quiz.published
                        const publish = {...the_quiz, published: ispub}
                        console.log("Prinitng updated quiz!!")
                        console.log(publish)
                        await quizzesClient.updateQuiz(publish);
                        console.log("Quiz updated on backend")
                        dispatch(updateQuiz(publish));

                    }}> {the_quiz.published ? ("Unpublish Quiz") : ("Publish Quiz") } </Dropdown.Item>
            </DropdownButton>
        </div>
    );
}