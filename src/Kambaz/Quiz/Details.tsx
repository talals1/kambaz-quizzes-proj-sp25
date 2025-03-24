import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { quizzes } from "../Database";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const quiz = quizzes.find(q => q._id === qid)

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <Container>
            <h2>{quiz?.title}</h2>
            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Quiz Type</b> </Col>
                <Col size={4} className="text-start"> {quiz?.quizType} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Points</b> </Col>
                <Col size={4} className="text-start"> {quiz?.points} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Assignment Group</b> </Col>
                <Col size={4} className="text-start"> {quiz?.group} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Shuffle Answers</b> </Col>
                <Col size={4} className="text-start"> {quiz?.shuffle ? "Yes" : "No"} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Time Limit</b> </Col>
                <Col size={4} className="text-start"> {quiz?.timeLimit} minutes </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Multiple Attempts</b> </Col>
                <Col size={4} className="text-start"> {quiz?.multipleAttempts ? "Yes" : "No"} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Number of Attempts</b> </Col>
                <Col size={4} className="text-start"> {quiz?.numberOfAttempts} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Show Correct Answers</b> </Col>
                <Col size={4} className="text-start"> {quiz?.showCorrectAnswers ? "Yes" : "Np"} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Access Code</b> </Col>
                <Col size={4} className="text-start"> {quiz?.accessCode} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>One Question at a Time</b> </Col>
                <Col size={4} className="text-start"> {quiz?.oneQuestionAtATime ? "Yes" : "No"} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Webcam Required</b> </Col>
                <Col size={4} className="text-start"> {quiz?.webcamRequired ? "Yes" : "No"} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Lock Questions after Answering</b> </Col>
                <Col size={4} className="text-start"> {quiz?.lockAfterAnswering ? "Yes" : "No"} </Col>
            </Row>

            <br/>

            <Table bordered>
                <thead>
                    <th>Due Date</th>
                    <th>Available Date</th>
                    <th>Until Date</th>
                </thead>
                <tr>
                    <td>{formatDate(quiz?.dueDate)}</td>
                    <td>{formatDate(quiz?.availableFromDate)}</td>
                    <td>{formatDate(quiz?.availableUntilDate)}</td>
                </tr>
            </Table>
        </Container>
    );
}