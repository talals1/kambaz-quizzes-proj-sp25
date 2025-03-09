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
        addQuiz: (state, { payload: { courseID, studentID } }) => {
            const newQuiz: any = {
                _id: uuidv4(),
                user: studentID,
                course: courseID,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        }
    },
});
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;