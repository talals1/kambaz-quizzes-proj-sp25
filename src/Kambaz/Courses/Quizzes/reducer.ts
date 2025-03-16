import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    quizzes: quizzes,
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
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

        updateQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((quiz) =>
                quiz._id === updatedQuiz._id
                    ? { ...quiz, ...updatedQuiz }
                    : quiz
            );
        }
    },
});

export const {
    addQuiz,
    updateQuiz
} = quizSlice.actions;
export default quizSlice.reducer;
