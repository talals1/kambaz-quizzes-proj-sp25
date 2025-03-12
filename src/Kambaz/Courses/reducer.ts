import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../Database";

const initialState = {
    courses: courses, // Load initial courses from database
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, { payload }) => {
            state.courses.push({ ...payload, _id: uuidv4() });
        },
        updateCourse: (state, { payload }) => {
            state.courses = state.courses.map((course) =>
                course._id === payload._id ? payload : course
            );
        },
        deleteCourse: (state, { payload }) => {
            state.courses = state.courses.filter(
                (course) => course._id !== payload
            );
        },
    },
});

export const { addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
