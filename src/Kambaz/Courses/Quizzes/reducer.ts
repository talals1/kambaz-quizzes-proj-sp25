import { createSlice } from "@reduxjs/toolkit";

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
                _id: quiz._id,
                qids: quiz.qids || [],
                title: quiz.title || "",
                course: quiz.course || "",
                type: quiz.type || "Graded Quiz",
                points: quiz.points || 0,
                group: quiz.group || "Quizzes",
                shuffleAnswers: quiz.shuffleAnswers || true,
                timeLimit: quiz.timeLimit || 20,
                multipleAttempts: quiz.multipleAttempts || false,
                numberOfAttempts: quiz.numberOfAttempts || 1,
                showCorrectAnswers: quiz.showCorrectAnswers || false,
                accessCode: quiz.accessCode || "",
                oneAtATime: quiz.oneAtATime || true,
                webcamRequired: quiz.webcamRequired || false,
                lockAfterAnswer: quiz.lockAfterAnswer || false,
                dueDate: quiz.dueDate || "",
                availableDate: quiz.availableDate || "",
                untilDate: quiz.untilDate || "",
                published: quiz.published || false,
            };
            if (!newQuiz.multipleAttempts) {
                newQuiz.numberOfAttempts = 1;
            }
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        updateQuiz: (state: any, { payload: updatedQuiz }) => {
            if (!updatedQuiz.multipleAttempts) {
                updatedQuiz.numberOfAttempts = 1;
            }

            state.quizzes = state.quizzes.map((quiz: any) =>
                quiz._id === updatedQuiz._id ? updatedQuiz : quiz
            );
            console.log();
        },

        deleteQuiz: (state, { payload }) => {
            state.quizzes = state.quizzes.filter(
                (quiz: any) => quiz._id !== payload
            );
        },
    },
});

export const { addQuiz, updateQuiz, setQuizzes, deleteQuiz } =
    quizSlice.actions;
export default quizSlice.reducer;
