import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: [],
};
const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enroll: (state, { payload: { courseID, studentID } }) => {
            const newEnrollment: any = {
                _id: uuidv4(),
                user: studentID,
                course: courseID,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenroll: (state, { payload: { courseID, studentID } }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.course === courseID && e.user === studentID)
            );
        },
    },
});
export const { enroll, unenroll, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
