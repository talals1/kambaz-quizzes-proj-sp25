import { createSlice } from "@reduxjs/toolkit";
import { quizzes, questions } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    quizzes: quizzes,
    questions: questions,
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, { payload: { quiz } }) => {
            const newQuiz = {
                _id: uuidv4(),
                title: quiz.title || "",
                course: quiz.course || "",
                qids: quiz.qids || [],
                type: quiz.type || "GRADED QUIZ",
                points: quiz.points || "100",
                assignmentGroup: quiz.assignmentGroup || "QUIZZES",
                shuffleAnswers: quiz.shuffleAnswers || "YES",
                timeLimit: quiz.timeLimit || "20",
                multipleAttempts: quiz.multipleAttempts || "NO",
                numAttempts: quiz.numAttempts || "1",
                showCorrectAnswers: quiz.showCorrectAnswers || "",
                accessCode: quiz.accessCode || "",
                oneAtATime: quiz.oneAtATime || "YES",
                webcamRequired: quiz.webcamRequired || "NO",
                lockAfterAnswer: quiz.lockAfterAnswer || "NO",
                dueDate: quiz.dueDate || "",
                availableDate: quiz.availableDate || "",
                untilDate: quiz.untilDate || "",
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        addQuestion: (state, { payload: question }) => {
            const newQuestion = {
                _id: uuidv4(),
                title: question.title,
                type: question.type,
                points: question.points,
                answers: question.type === "MCQ" ? question.answers || [] : "",
                correctAnswer: question.correctAnswer,
                description: question.description,
            };
            state.questions = [...state.questions, newQuestion];
        },

        deleteQuestion: (state, { payload: questionId }) => {
            state.questions = state.questions.filter(
                (q) => q._id !== questionId
            );
        },

        updateQuestion: (state, { payload: updatedQuestion }) => {
            state.questions = state.questions.map((q) =>
                q._id === updatedQuestion._id ? { ...q, ...updatedQuestion } : q
            );
        },

        removeAnswer: (state, { payload: { questionId, answer } }) => {
            state.questions = state.questions.map((q) => {
                if (q._id === questionId && q.type === "MCQ") {
                    return {
                        ...q,
                        answers: q.answers.filter((a) => a !== answer),
                        // If the removed answer was the correct answer, reset it
                        correctAnswer:
                            q.correctAnswer === answer ? "" : q.correctAnswer,
                    };
                }
                return q;
            });
        },

        updateAnswer: (
            state,
            { payload: { questionId, answerIndex, newAnswer } }
        ) => {
            const question = state.questions.find((q) => q._id === questionId);
            if (question) {
                question.answers[answerIndex] = newAnswer;
            }
        },

        updateCorrectAnswer: (
            state,
            { payload: { questionId, correctAnswer } }
        ) => {
            const question = state.questions.find((q) => q._id === questionId);
            if (question) {
                question.correctAnswer = correctAnswer;
            }
        },
    },
});
export const {
    addQuiz,
    addQuestion,
    deleteQuestion,
    updateQuestion,
    removeAnswer,
    updateAnswer,
    updateCorrectAnswer,
} = quizSlice.actions;
export default quizSlice.reducer;
