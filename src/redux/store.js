import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './subjects/subjectsSlice';

const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
  },
});

export default store;
