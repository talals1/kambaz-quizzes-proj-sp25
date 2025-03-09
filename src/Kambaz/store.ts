import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./Courses/Quizzes"

const store = configureStore({
    reducer: {
        quizReducer
    },
});
export default store;