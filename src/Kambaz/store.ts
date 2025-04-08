import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./reducer";
import assignmentReducer from "./Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import quizReducer from "./Courses/Quizzes/quizReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        enrollmentReducer,
        assignmentReducer,
        coursesReducer,
        quizReducer,
    },
});
export default store;