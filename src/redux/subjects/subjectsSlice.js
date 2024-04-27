import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjects: [
    {
      subjectName: 'Mathematics',
      topics: [
        {
          topicName: 'Relations and Functions',
          flashcards: [
            { content: '9 + 6 + 7x - 2x - 3' },
            { content: '2' },
            { content: '3' },
            { content: '4' },
            { content: '5' },
            { content: '6' },
            { content: '7' },
            { content: '8' },
            { content: '9' },
          ],
        },
        {
          topicName: 'Trigonometry',
          flashcards: [
            { content: 'Tri slide 1' },
            { content: 'Tri slide 2' },
            { content: 'Tri slide 3' },
            { content: 'Tri slide 4' },
            { content: 'Tri slide 5' },
            { content: 'Tri slide 6' },
            { content: 'Tri slide 7' },
            { content: 'Tri slide 8' },
            { content: 'Tri slide 9' }],
        },
      ],
    },
    {
      subjectName: 'English',
      topics: [
        {
          topicName: 'Vocabulary',
          flashcards: [
            { content: 'English vocabular 1' },
            { content: 'English vocabular 2' },
            { content: 'English vocabular 3' },
            { content: 'English vocabular 4' },
            { content: 'English vocabular 5' },
            { content: 'English vocabular 6' },
            { content: 'English vocabular 7' },
            { content: 'English vocabular 8' },
            { content: 'English vocabular 9' },
            { content: 'English vocabular 10' },
          ],
        },
        {
          topicName: 'Synonyms',
          flashcards: [
            { content: 'English synonyms 1' },
            { content: 'English 2' },
            { content: 'English 3' },
            { content: 'English 4' },
            { content: 'English 5' },
            { content: 'English 6' },
            { content: 'English 7' },
            { content: 'English 8' },
            { content: 'English 9' },
            { content: 'English 10' },
          ],
        },
      ],
    },
  ],
};

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {},
});

export default subjectsSlice.reducer;
