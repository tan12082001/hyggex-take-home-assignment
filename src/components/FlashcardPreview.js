import React, { useState } from 'react';
import FlashCardStudy from './FlashCardStudy';
import TempFlashCardComp from './TempComponent';

const FlashcardPreview = () => {
  const [selectedOption, setSelectedOption] = useState('study');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const headings = [
    {
      subject: 'Mathematics',
      topic: 'Relations and Functions',
    },
  ];

  return (
    <div className="flashcard-section-outer">
      <div className="flashcard-section-heading">
        {headings[0].topic}
        {' '}
        {`(${headings[0].subject})`}
      </div>
      <div className="topic-flashcard">
        <div className="flashcard-header">
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('study')} className="flashcard-item-link">Study</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('quiz')} className="flashcard-item-link">Quiz</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('test')} className="flashcard-item-link">Test</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('game')} className="flashcard-item-link">Game</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('others')} className="flashcard-item-link">Others</button>
          </div>
        </div>
        {selectedOption === 'study' && <FlashCardStudy />}
        {selectedOption === 'quiz' && <TempFlashCardComp />}
        {selectedOption === 'test' && <TempFlashCardComp />}
        {selectedOption === 'game' && <TempFlashCardComp />}
        {selectedOption === 'others' && <TempFlashCardComp />}
      </div>
    </div>
  );
};

export default FlashcardPreview;
