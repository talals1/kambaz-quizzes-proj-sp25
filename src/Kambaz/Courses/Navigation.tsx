import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();

    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom",
        "Assignments",
        "Quizzes",
        "MyQuizzes",
        "Grades",
        "People",
    ];

    return (
        <ListGroup
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kambaz/Courses/${cid}/${link}`}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    className={`list-group-item border border-0 ${
                        pathname.includes(link) ? "active" : "text-danger"
                    }`}
                >
                    {link}
                </Link>
            ))}
        </ListGroup>
    );
}
