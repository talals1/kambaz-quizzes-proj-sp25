import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    questions: [],
    totalPoints: 0,
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setTotalPoints : (state, {payload: points}) => {
            state.totalPoints = points;
        },
        
        setQuestions: (state, action) => {
            state.questions = action.payload;

            let points = 0;
            for (const question of state.questions) {
                points += question.points;
            }
            state.totalPoints = points;
        },

        addQuestion: (state, { payload: question }) => {
            const newQuestion = {
                _id: uuidv4(),
                quizID: question.quizID,
                title: question.title,
                type: question.type,
                points: question.points,
                answers:
                    question.type === "multiple-choice"  || question.type === "fill-in-the-blank"
                        ? question.answers || []
                        : "",
                correctAnswer: question.correctAnswer,
                description: question.description,
            };
            state.questions = [...state.questions, newQuestion];

            state.totalPoints = question.points;
        },

        deleteQuestion: (state, { payload: questionId }) => {
            state.totalPoints -= state.questions.find((q) => q._id === questionId).points;

            state.questions = state.questions.filter(
                (q) => q._id !== questionId
            );
        },

        updateQuestion: (state, { payload: updatedQuestion }) => {
            state.totalPoints -= state.questions.find((q) => q._id === questionId).points;

            state.totalPoints += updatedQuestion.points;

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
    setQuestions,
    setTotalPoints
} = questionSlice.actions;
export default questionSlice.reducer;
