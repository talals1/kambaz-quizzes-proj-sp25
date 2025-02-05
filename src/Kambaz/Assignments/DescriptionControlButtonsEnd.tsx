import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function DescriptionControlButtonsEnd() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsGripVertical className="me-2 fs-3" />
        </div>
    );
}
