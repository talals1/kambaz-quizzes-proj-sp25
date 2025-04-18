import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    quizzes: [],
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz = {
                _id: uuidv4(),
                title: quiz.title || "",
                course: quiz.course || "",
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

        updateQuiz: (state: any, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((quiz: any) =>
                quiz._id === updatedQuiz._id ? updatedQuiz : quiz
            );
        },

        deleteQuiz: (state, { payload}) => {
            state.quizzes = state.quizzes.filter(
                (quiz: any) => quiz._id === payload
            );
        },
    },
});

export const { addQuiz, updateQuiz, setQuizzes, deleteQuiz } = quizSlice.actions;
export default quizSlice.reducer;
