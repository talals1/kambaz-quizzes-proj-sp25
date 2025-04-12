import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const findQuestionsForQuiz = async (quizId: string) => {
    const { data } = await axios.get(`${QUIZZES_API}/${quizId}`);
    return data;
};

export const createQuestionForQuiz = async (quizId: string, question: any) => {
    const response = await axios.post(
        `${QUIZZES_API}/${quizId}/questions`,
        question
    );
    return response.data;
};

export const deleteQuiz = async (id: string) => {
    const { data } = await axios.delete(`${QUIZZES_API}/${id}`);
    return data;
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};
