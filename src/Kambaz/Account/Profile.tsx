import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <Form className="p-3">
                <Form.Group controlId="wd-username" className="mb-3">
                    <Form.Control
                        type="text"
                        defaultValue="alice"
                        placeholder="Username"
                    />
                </Form.Group>

                <Form.Group controlId="wd-password" className="mb-3">
                    <Form.Control
                        type="password"
                        defaultValue="123"
                        placeholder="Password"
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="wd-firstname">
                            <Form.Control
                                type="text"
                                defaultValue="Alice"
                                placeholder="First Name"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="wd-lastname">
                            <Form.Control
                                type="text"
                                defaultValue="Wonderland"
                                placeholder="Last Name"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="wd-dob" className="mb-3">
                    <Form.Control type="date" defaultValue="2000-01-01" />
                </Form.Group>

                <Form.Group controlId="wd-email" className="mb-3">
                    <Form.Control
                        type="email"
                        defaultValue="alice@wonderland"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group controlId="wd-role" className="mb-3">
                    <Form.Select defaultValue="FACULTY">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Link
                to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2"
            >
                Sign out
            </Link>
        </div>
    );
}
