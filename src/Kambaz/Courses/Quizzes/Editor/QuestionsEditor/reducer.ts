import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    questions: questions,
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion: (state, { payload: question }) => {
            const newQuestion = {
                _id: uuidv4(),
                quizID: question.quizID,
                title: question.title,
                type: question.type,
                points: question.points,
                answers:
                    question.type === "multiple-choice"
                        ? question.answers || []
                        : "",
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
    addQuestion,
    deleteQuestion,
    updateQuestion,
    removeAnswer,
    updateAnswer,
    updateCorrectAnswer,
} = questionSlice.actions;
export default questionSlice.reducer;