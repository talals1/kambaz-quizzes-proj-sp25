import { IoBan, IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate } from "react-router";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function QuizControlButtons({ quiz } : { quiz: any}) {
    const navigate = useNavigate();
    return (
        <div className="float-end">
            {quiz.published === "YES" ? <GreenCheckmark /> :
            <IoBan style={{ color: "red" }}/> }
            <DropdownButton variant="secondary" title={<IoEllipsisVertical className="fs-4" />} onClick={(e) => e.preventDefault()} >
                <Dropdown.Item onClick={(e) => {
                        e.preventDefault();
                        navigate(`${quiz._id}`);
                    }}> Edit Quiz </Dropdown.Item>
                <Dropdown.Item>
                    Delete Quiz
                </Dropdown.Item>
                <Dropdown.Item>
                    Publish Quiz
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
}