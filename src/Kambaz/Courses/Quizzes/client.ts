import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;

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

export const findTotalAttempts = async (quizId: string) => {
    const { data } = await axios.get(`${ATTEMPTS_API}/${quizId}`);
    return data;
};

export const findLatestQuizAttempt = async (quizId: string) => {
    const { data } = await axios.get(`${ATTEMPTS_API}/${quizId}/latest`);
    return data;
};

export const createQuizAttempt = async (quizId: string, attempt: any) => {
    const response = await axios.post(`${ATTEMPTS_API}/${quizId}`, attempt);
    return response.data;
};

export const removeQuestionFromQuiz = async (
    quizId: string,
    questionId: any
) => {
    const response = await axios.delete(
        `${QUIZZES_API}/${quizId}/${questionId}`
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
