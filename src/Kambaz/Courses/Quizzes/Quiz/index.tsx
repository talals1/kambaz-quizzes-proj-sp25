import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QuizEditor from "../Editor";
import { formatDate } from "../../../../utils";

export default function Quiz() {
    const { qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const { quizzes } = useSelector((state: any) => state.quizReducer);

    const quiz = quizzes.find((q: any) => {
        console.log(q);
        return q._id === qid
    });

    return (
        <>
            {currentUser.role === "FACULTY" ? <QuizEditor /> : (
                <>
                    <br/>
                    <h2><b>{quiz.title}</b></h2>

                    <hr/>
                    
                    <p className="my-1">
                        <b>Due</b> {formatDate(quiz.dueDate)}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Points</b> {quiz.points}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Questions</b> {quiz.qids.length}
                    </p>
                    <p className="my-1">
                        <b>Available</b> {formatDate(quiz.availableDate)} - {formatDate(quiz.untilDate)}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <b>Time Limit</b> {quiz.timeLimit} Minutes
                    </p>

                    <hr/>

                    <br/>
                    <div className="d-flex justify-content-center">
                        <Button variant="danger" >Take the Quiz</Button>
                    </div>                  
                    <br/>

                    <hr/>
                </>
            )}
        </>

    )
}