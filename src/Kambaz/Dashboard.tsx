import { useEffect, useState } from "react";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import * as enrollmentsClient from "./client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { enroll, setEnrollments, unenroll } from "./reducer.ts";

export default function Dashboard() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const { enrollments } = useSelector(
        (state: any) => state.enrollmentReducer
    );
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);

    const fetchCourses = async () => {
        try {
            if (showAllCourses) {
                const courses = await courseClient.fetchAllCourses();
                setCourses(courses);
            } else {
                const courses = await userClient.findMyCourses();
                setCourses(courses);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fetchEnrollments = async () => {
        const enrollments = await userClient.findMyEnrollments();
        dispatch(setEnrollments(enrollments));
    };
    useEffect(() => {
        fetchCourses();
        fetchEnrollments();
    }, [currentUser, showAllCourses]);

    const [course, setCourse] = useState<any>({
        _id: uuidv4(),
        name: "",
        description: "",
    });

    const handleNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
        setCourse({
            _id: uuidv4(),
            name: "",
            description: "",
        });
    };

    const handleUpdateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
        setCourse({
            _id: uuidv4(),
            name: "",
            description: "",
        });
    };

    const deleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const handleEnroll = async (courseId: string, studentId: string) => {
        await enrollmentsClient.enrollStudentInCourse(courseId, studentId);
        dispatch(
            enroll({
                courseID: courseId,
                studentID: studentId,
            })
        );
    };

    const handleUnenroll = async (courseId: string, studentId: string) => {
        await enrollmentsClient.unenrollStudentInCourse(courseId, studentId);
        dispatch(
            unenroll({
                courseID: courseId,
                studentID: studentId,
            })
        );
    };

    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                {currentUser?.role === "STUDENT" && (
                    <Button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                    >
                        Enrollments
                    </Button>
                )}
            </div>
            <hr />
            {currentUser?.role === "FACULTY" && (
                <div>
                    <h5>
                        New Course
                        <Button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={handleNewCourse}
                        >
                            Add
                        </Button>
                        <Button
                            className="btn btn-warning float-end me-2"
                            onClick={handleUpdateCourse}
                            id="wd-update-course-click"
                        >
                            Update
                        </Button>
                    </h5>
                    <br />
                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) =>
                            setCourse({ ...course, name: e.target.value })
                        }
                    />
                    <FormControl
                        value={course.description}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                description: e.target.value,
                            })
                        }
                    />
                    <hr />
                </div>
            )}
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course: any) => {
                        return (
                            <Col
                                className="wd-dashboard-course"
                                key={course._id}
                                style={{ width: "300px" }}
                            >
                                <Card>
                                    <Link
                                        to={`/Kambaz/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        <Card.Img
                                            src="/images/reactjs.jpg"
                                            variant="top"
                                            width="100%"
                                            height={160}
                                        />
                                        <Card.Body className="card-body">
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name}{" "}
                                            </Card.Title>
                                            <Card.Text
                                                className="wd-dashboard-course-description overflow-hidden"
                                                style={{ height: "100px" }}
                                            >
                                                {course.description}{" "}
                                            </Card.Text>
                                            <Button variant="primary">
                                                {" "}
                                                Go{" "}
                                            </Button>
                                            {currentUser.role === "FACULTY" && (
                                                <div>
                                                    <Button
                                                        id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2"
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(
                                                                course._id
                                                            );
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-delete-course-click"
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            )}
                                            {showAllCourses && (
                                                <div className="mt-2">
                                                    {enrollments.some(
                                                        (e: any) =>
                                                            e.course ===
                                                            course._id
                                                    ) ? (
                                                        <Button
                                                            className="btn btn-danger"
                                                            id="wd-unenroll-click"
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                event.preventDefault();
                                                                handleUnenroll(
                                                                    course._id,
                                                                    currentUser._id
                                                                );
                                                            }}
                                                        >
                                                            Unenroll
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            className="btn btn-success"
                                                            id="wd-enroll-click"
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                event.preventDefault();
                                                                handleEnroll(
                                                                    course._id,
                                                                    currentUser._id
                                                                );
                                                            }}
                                                        >
                                                            Enroll
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}
