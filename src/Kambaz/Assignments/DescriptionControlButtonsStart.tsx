import { BsGripVertical } from "react-icons/bs";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

export default function DescriptionControlButtonsStart() {
    return (
        <div className="float-start p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlinePlaylistAddCheck className="me-2 fs-1" />
        </div>
    );
}
