import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import FlashCardStudy from './FlashCardStudy';
import TempFlashCardComp from './TempComponent';
import PathDisplayComponent from './PathDisplayComponent';

const FlashcardPreview = () => {
  const storeData = useSelector((state) => state.subjects.subjects);
  const [selectedOption, setSelectedOption] = useState('study');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
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
    <div className="flashcard-section-outer w-full h-full flex flex-col gap-16">
      <PathDisplayComponent subject={selectedSubject} topic={selectedTopic} />
      <div className="choose-subject-topic-outer w-full flex flex-col md:flex-row justify-between items-center text-lg font-medium gap-4">
        {storeData.map((subject, index) => (
          <div key={subject.subjectName} className="w-full">
            <h3 className="text-2xl text-white font-semibold border rounded-2xl px-4 py-3 bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-between gap-2">
              {subject.subjectName}
              <button type="button" className="down-action-arrow px-2 pb-2 pt-0" onClick={() => handleShowTopics(index)}>
                &#8964;
              </button>
            </h3>
            {subject.topics.map((topic) => (
              <button
                type="button"
                key={topic.topicName}
                style={{ display: showTopics[index] ? 'block' : 'none' }}
                onClick={
                  () => handleOptionClick(selectedOption, topic.topicName, subject.subjectName)
                }
                className="border border-black border-2xl rounded-2xl px-4 py-3 m-2"
              >
                {topic.topicName}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="flashcard-section-heading text-2xl font-semibold bg-gradient-to-b from-blue-900 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
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
      <div className="topic-flashcard text-center flex flex-col justify-center items-center gap-8">
        <div className="flashcard-header flex flex-row gap-4 text-gray text-lg">
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('study', selectedTopic, selectedSubject)} className={`flashcard-item-link ${selectedOption === 'study' ? 'underline' : ''} flex gap-2`}>Study</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('quiz', selectedTopic, selectedSubject)} className={`flashcard-item-link ${selectedOption === 'quiz' ? 'underline' : ''}`}>Quiz</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('test', selectedTopic, selectedSubject)} className={`flashcard-item-link ${selectedOption === 'test' ? 'underline' : ''}`}>Test</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('game', selectedTopic, selectedSubject)} className={`flashcard-item-link ${selectedOption === 'game' ? 'underline' : ''}`}>Game</button>
          </div>
          <div className="header-each-item">
            <button type="button" onClick={() => handleOptionClick('others', selectedTopic, selectedSubject)} className={`flashcard-item-link ${selectedOption === 'others' ? 'underline' : ''}`}>Others</button>
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
