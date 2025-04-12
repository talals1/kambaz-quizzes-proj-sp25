import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const deleteQuestion = async (id: string) => {
    const { data } = await axios.delete(`${QUESTIONS_API}/${id}`);
    return data;
};

export const updateQuestion = async (question: any) => {
    const { data } = await axios.put(
        `${QUESTIONS_API}/${question._id}`,
        question
    );
    return data;
};
