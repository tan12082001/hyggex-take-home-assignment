import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import FlashCardStudy from './FlashCardStudy';
import TempFlashCardComp from './TempComponent';
import PathDisplayComponent from './PathDisplayComponent';

const FlashcardPreview = () => {
  const storeData = useSelector((state) => state.subjects.subjects);
  const [selectedOption, setSelectedOption] = useState('study');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showTopics, setShowTopics] = useState(Array(storeData.length).fill(false));

  const handleShowTopics = (index) => {
    const newShowTopics = [...showTopics];
    newShowTopics[index] = !newShowTopics[index];
    setShowTopics(newShowTopics);
  };

  const handleOptionClick = (option, topicName, subjectName) => {
    setSelectedOption(option);
    setSelectedTopic(topicName);
    setSelectedSubject(subjectName);
  };

  return (
    <div className="flashcard-section-outer">
      <PathDisplayComponent subject={selectedSubject} topic={selectedTopic} />
      <div className="choose-subject-topic-outer">
        {storeData.map((subject, index) => (
          <div key={subject.subjectName}>
            <h3>
              {subject.subjectName}
              <button type="button" className="down-action-arrow" onClick={() => handleShowTopics(index)}>
                &#8964;
              </button>
            </h3>
            {subject.topics.map((topic) => (
              <button
                type="button"
                key={topic.topicName}
                style={{ display: showTopics[index] ? 'block' : 'none' }}
                onClick={() => handleOptionClick('study', topic.topicName, subject.subjectName)}
              >
                {topic.topicName}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="flashcard-section-heading">
        {selectedTopic && (
          <>
            {selectedTopic}
            {' '}
            (
            {selectedSubject}
            )
          </>
        )}
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
        {' '}
        {selectedOption === 'study' && selectedTopic && (
          storeData.map((subject) => (
            subject.topics.find((topic) => topic.topicName === selectedTopic) && (
              <FlashCardStudy
                key={selectedTopic}
                study={subject.topics.find((topic) => topic.topicName === selectedTopic).flashcards}
              />
            )
          ))
        )}
        {selectedOption === 'quiz' && <TempFlashCardComp />}
        {selectedOption === 'test' && <TempFlashCardComp />}
        {selectedOption === 'game' && <TempFlashCardComp />}
        {selectedOption === 'others' && <TempFlashCardComp />}
      </div>
    </div>
  );
};

export default FlashcardPreview;
