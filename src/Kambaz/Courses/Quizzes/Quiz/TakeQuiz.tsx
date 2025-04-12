import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button, Form, FormCheck, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TakeQuiz() {
    const { cid, qid } = useParams();
    // const dispatch = useDispatch();
    const questions = useSelector((state: any) => state.questionReducer.questions);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const [answerList, setAnswerList] = useState({});
    // const [quizAttempt, setQuizAttempt] = useState({});

    const quiz = quizzes.find((q: any) => {
        console.log(q);
        return q._id === qid
    });

    const handleSubmit = () => {

        const quizAttempt = {
            _id: uuidv4(),
            user_id: currentUser._id,
            quiz_id: qid,
            answers: answerList
        };
        // send out quizAttempt
        console.log(quizAttempt);
    };
    return (
        // <div>
        //     {currentUser.role === "STUDENT" ? (
        //             quiz.oneQuestionAtATime ? (
        //                 <div> test 1 </div>
        //             ) : (
        //                 <div> test 2 </div>
        //             )
        //         ) : (
        //             <div> test 3 </div>
        //         )
        //     }
        // </div>
        <div>
            {currentUser.role === "STUDENT" ? (
                // <div>TAKING QUIZ</div>
                // need to add the oneQuestionAtATime logic
                // {quiz.oneQuestionAtATime ? (
                    
                // ) : (
                // )}
                <ListGroup>
                    {questions
                        .filter((question: any) => question.quizID === qid)
                        .map((question: any) => (
                            <ListGroup.Item key={question._id}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="mb-0">
                                        <b>{question.title}</b>
                                    </h4>
                                </div>
                                <hr />
                                <p>{question.description}</p>
                                <Form>
                                    {question.type === "multiple-choice" &&
                                        question.answers.map(
                                            (answer: any, index: any) => (
                                                <FormCheck
                                                    key={index}
                                                    type="radio"
                                                    id={`answer-${index}`}
                                                    label={answer}
                                                    value={answer}
                                                    onChange = {(e) => {
                                                        setAnswerList({...answerList, [questions._id]: e.target.value});
                                                    }}
                                                />
                                            )
                                        )}

                                    {question.type === "true-false" && (
                                        <>
                                            <FormCheck
                                                type="radio"
                                                id="true-answer"
                                                label="True"
                                                value="True"
                                                onChange={() => setAnswerList({...answerList, [question._id]: true})}
                                            />
                                            <FormCheck
                                                type="radio"
                                                id="false-answer"
                                                label="False"
                                                value="False"
                                                onChange={() => setAnswerList({...answerList, [question._id]: false})}
                                            />
                                        </>
                                    )}

                                    {question.type === "fill-in-the-blank" && (
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your answer here"
                                            onChange={(e) => setAnswerList({...answerList, [question._id]: e.target.value})}
                                        />
                                    )}
                                </Form>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
                ) : (
                    <div>PREVIEWING QUIZ</div>
                )
            }
            <hr/>
            <Button variant="secondary" onClick={() => {
                handleSubmit();
            }}>
                Submit
            </Button>
        </div>
    );
}