import { IoBan, IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function QuizControlButtons({ quiz } : { quiz: any}) {
    return (
        <div>
            {quiz.published === "YES" ? <GreenCheckmark /> :
            <IoBan style={{ color: "red" }}/> }
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}