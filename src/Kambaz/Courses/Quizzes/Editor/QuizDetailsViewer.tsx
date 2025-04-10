import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { quizzes } from "../Database";
import { useSelector } from "react-redux";

export default function QuizDetailsViewer() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    console.log("Details screen - All quizzes")
    console.log(quizzes)
    const quiz = quizzes.find((q: any) => {
        return q._id === qid
    });
    // const quiz = quizzes.find(q => q._id === qid)

    const formatBoolean = (bool: boolean) => bool ? "Yes" : "No";

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
                <Col size={4} className="text-start"> {quiz?.type} </Col>
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
                <Col size={4} className="text-start"> {formatBoolean(quiz?.shuffleAnswers)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Time Limit</b> </Col>
                <Col size={4} className="text-start"> {quiz?.timeLimit} minutes </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Multiple Attempts</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.multipleAttempts)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Number of Attempts</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.numberOfAttempts)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Show Correct Answers</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.showCorrectAnswers)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Access Code</b> </Col>
                <Col size={4} className="text-start"> {quiz?.accessCode} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>One Question at a Time</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.oneQuestionAtATime)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Webcam Required</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.webcamRequired)} </Col>
            </Row>

            <Row className="justify-content-start">
                <Col size={4} className="text-end"> <b>Lock Questions after Answering</b> </Col>
                <Col size={4} className="text-start"> {formatBoolean(quiz?.lockAfterAnswering)} </Col>
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
                    <td>{formatDate(quiz?.availableDate)}</td>
                    <td>{formatDate(quiz?.untilDate)}</td>
                </tr>
            </Table>
        </Container>
    );
}