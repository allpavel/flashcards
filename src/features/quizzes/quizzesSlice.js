import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    },
});

export const addQuizActionCreator = quiz => {
    const { quizId, name, topicId, cardIds} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({quizId: quizId, topicId: topicId}));
    }
}

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes;