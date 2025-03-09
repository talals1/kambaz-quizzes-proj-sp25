import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();

    return (
        <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
        >
            {links.includes("Signin") && (
                <Link
                    to="/Kambaz/Account/Signin"
                    id="wd-account-signin-link"
                    className={`list-group-item border border-0 ${
                        pathname.includes("Signin") ? "active" : "text-danger"
                    }`}
                >
                    Signin
                </Link>
            )}
            {links.includes("Signup") && (
                <Link
                    to="/Kambaz/Account/Signup"
                    id="wd-account-signup-link"
                    className={`list-group-item border border-0 ${
                        pathname.includes("Signup") ? "active" : "text-danger"
                    }`}
                >
                    Signup
                </Link>
            )}
            {links.includes("Profile") && (
                <Link
                    to="/Kambaz/Account/Profile"
                    id="wd-account-profile-link"
                    className={`list-group-item border border-0 ${
                        pathname.includes("Profile") ? "active" : "text-danger"
                    }`}
                >
                    Profile
                </Link>
            )}
        </div>
    );
}
