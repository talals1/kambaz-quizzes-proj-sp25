import { createSlice } from "@reduxjs/toolkit"
import { quizzes } from "../Database"

const initialState = {
    quizzes: quizzes
}

const myQuizzesSlice = createSlice({
    name: "myQuizzes",
    initialState,
    reducers: {
        addQuiz: (state, { payload: newQuiz }) => {
            state.quizzes = state.quizzes.push(newQuiz) as any
        },
        updateQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((q: any) => 
                q._id === updatedQuiz._id ? updatedQuiz : q
            ) as any;
            console.log("New quizzes state!!")
            console.log(state.quizzes)
        }
    }
});

export const { addQuiz, updateQuiz } = myQuizzesSlice.actions;
export default myQuizzesSlice.reducer;