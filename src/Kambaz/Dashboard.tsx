import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/reactjs.jpg" width={200} />
                    <div>
                    <h5> CS1234 React JS </h5>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
                
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1235/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/angular.jpg" width={200} />
                    <div>
                    <h5> CS1235 Angular JS </h5>
                    <p className="wd-dashboard-course-title">
                        Coding in Angular  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>

                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1236/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/network.jpg" width={200} />
                    <div>
                    <h5> CS1236 Networking </h5>
                    <p className="wd-dashboard-course-title">
                        Network Engineer  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
                
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1237/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/data.jpg" width={200} />
                    <div>
                    <h5> CS1237 Data Mining </h5>
                    <p className="wd-dashboard-course-title">
                        Data Scientist  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
                
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1238/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/algo.jpg" width={200} />
                    <div>
                    <h5> CS1238 Algorithms </h5>
                    <p className="wd-dashboard-course-title">
                        Algo  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
                
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1239/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/cloud.jpg" width={200} />
                    <div>
                    <h5> CS1239 Cloud Computer </h5>
                    <p className="wd-dashboard-course-title">
                        Cloud Engineer  </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
                
                <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1240/Home"
                        className="wd-dashboard-course-link" >
                    <img src="./images/cap.jpg" width={200} />
                    <div>
                    <h5> CS1240 Senior Capstone Project </h5>
                    <p className="wd-dashboard-course-title">
                        Capstone </p>
                    <button> Go </button>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    );
}
