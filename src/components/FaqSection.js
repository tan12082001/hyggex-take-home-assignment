import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FaqSection = () => {
  const content = [
    {
      question: 'Can education flashcards be used for all age groups?',
      answer: 'Yes, these flashcards are for helping for age ranges 13 to 25.',
    },
    {
      question: 'How do education flashcards work?',
      answer: 'how do education flashcards work.',
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Yes, these flashcards helps for test preparation and you can take quizes.',
    },
  ];

  const [showAnswers, setShowAnswers] = useState(Array(content.length).fill(false));

  const handleShowAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="faq-section-outer" id="faq-section">
      <div className="faq-section-heading">FAQ</div>
      <div className="faq-questions">
        <div className="each-question-answer">
          {content.map(({ question, answer }, index) => (
            <div key={uuidv4()}>
              <div className="each-question">
                {question}
                <button type="button" className="down-action-arrow" onClick={() => handleShowAnswer(index)}>
                  &#8964;
                </button>
              </div>
              <div className="each-answer" style={{ display: showAnswers[index] ? 'block' : 'none' }}>
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
