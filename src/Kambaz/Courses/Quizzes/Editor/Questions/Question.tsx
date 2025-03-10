import { FormCheck } from "react-bootstrap";
import { Form } from "react-router";

const QuestionComponent = ({ question }) => {
    return (
        <div>
            <h4>
                <b>{question.title}</b>
            </h4>
            <hr />
            <p>
                {question.description}
                {/* {question.type === "fill-in-the-blank"
                    ? "Type your answer below:"
                    : "Select the correct answer:"} */}
            </p>

            <Form>
                {question.type === "multiple-choice" &&
                    question.answers.map((answer, index) => (
                        <FormCheck
                            key={index}
                            type="radio"
                            id={`answer-${index}`}
                            name="question"
                            label={answer}
                            value={answer}
                            checked={answer === question.correctAnswer}
                        />
                    ))}

                {question.type === "true-false" && (
                    <>
                        <FormCheck
                            type="radio"
                            id="true-answer"
                            name="question"
                            label="True"
                            value="True"
                            checked={"True" === question.correctAnswer}
                        />
                        <FormCheck
                            type="radio"
                            id="false-answer"
                            name="question"
                            label="False"
                            value="False"
                            checked={"False" === question.correctAnswer}
                        />
                    </>
                )}

                {question.type === "fill-in-the-blank" && (
                    <Form.Control
                        type="text"
                        name="question"
                        defaultValue={question.correctAnswer}
                        placeholder="Enter your answer here"
                    />
                )}
            </Form>
        </div>
    );
};

export default QuestionComponent;
