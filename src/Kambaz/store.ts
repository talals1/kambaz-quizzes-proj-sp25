import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./reducer";
import assignmentReducer from "./Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import quizReducer from "./Courses/Quizzes/reducer";
import questionReducer from "./Courses/Quizzes/Editor/QuestionsEditor/reducer"
import myQuizzesReducer from "./Quiz/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        enrollmentReducer,
        assignmentReducer,
        coursesReducer,
        quizReducer,
        questionReducer,
        myQuizzesReducer,
    },
});
export default store;