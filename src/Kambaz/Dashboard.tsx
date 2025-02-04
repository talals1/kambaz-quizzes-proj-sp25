import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img
                                    src="/images/reactjs.jpg"
                                    width={200}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1234 React JS
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1235/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img
                                    src="/images/angular.jpg"
                                    width={200}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1235 Angular JS
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Coding in Angular
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1236/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img
                                    src="/images/network.jpg"
                                    width={200}
                                />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1236 Networking
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Network Engineer
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1237/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img src="/images/data.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        {" "}
                                        CS1237 Data Mining{" "}
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Data Scientist
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1238/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img src="/images/algo.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1238 Algorithms
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Algo{" "}
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1239/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img src="/images/cloud.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1239 Cloud Computer
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Cloud Engineer
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                    <Col
                        className="wd-dashboard-course"
                        style={{ width: "250px" }}
                    >
                        <Card>
                            <Link
                                to="/Kambaz/Courses/1240/Home"
                                className="wd-dashboard-course-link"
                            >
                                <Card.Img src="/images/cap.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">
                                        CS1240 Senior Capstone Project
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Capstone
                                    </Card.Text>
                                    <Button variant="Primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
