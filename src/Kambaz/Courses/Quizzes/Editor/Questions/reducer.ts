import { createSlice } from "@reduxjs/toolkit";
import {questions} from "../../../../Database"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    questions: questions,
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        // Add a new question
        addQuestion: (state, { payload: question }) => {
            const newQuestion = {
                _id: uuidv4(),
                qid: question.qid,
                title: question.title,
                type: question.type,
                points: question.points,
                answers: question.type === "MCQ" ? question.answers || [] : "",
                correctAnswer: question.correctAnswer,
                question: question.question,
            };
            state.questions.push(newQuestion);
        },

        // Delete a question by ID
        deleteQuestion: (state, { payload: questionId }) => {
            state.questions = state.questions.filter(q => q._id !== questionId);
        },

        // Update an existing question (title, points, and answers)
        updateQuestion: (state, { payload: updatedQuestion }) => {
            state.questions = state.questions.map(q =>
                q._id === updatedQuestion._id ? { ...q, ...updatedQuestion } : q
            );
        },

        // Remove an answer from an MCQ question
        removeAnswer: (state, { payload: { questionId, answer } }) => {
            state.questions = state.questions.map(q => {
                if (q._id === questionId && q.type === "MCQ") {
                    return {
                        ...q,
                        answers: q.answers.filter(a => a !== answer),
                        // If the removed answer was the correct answer, reset it
                        correctAnswer: q.correctAnswer === answer ? "" : q.correctAnswer,
                    };
                }
                return q;
            });
        },

        updateAnswer: (state, { payload: {questionId, answerIndex, newAnswer} }) => {
            const question = state.questions.find((q) => q._id === questionId);
            if (question) {
                question.answers[answerIndex] = newAnswer;
            }
        },

        updateCorrectAnswer: (state, { payload: {questionId, correctAnswer} }) => {
            const question = state.questions.find((q) => q._id === questionId);
            if (question) {
                question.correctAnswer = correctAnswer;
            }
        },
    },
});

export const { addQuestion, deleteQuestion, updateQuestion, removeAnswer, updateAnswer, updateCorrectAnswer } =
    questionsSlice.actions;

export default questionsSlice.reducer;