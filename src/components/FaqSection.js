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
    <div className="faq-section-outer py-4 md:px-24" id="faq-section">
      <div className="faq-section-heading text-4xl font-bold bg-gradient-to-b from-blue-900 to-blue-700 text-transparent bg-clip-text py-12">FAQ</div>
      <div className="faq-questions w-full md:w-3/4">
        <div className="each-question-answer">
          {content.map(({ question, answer }, index) => (
            <div key={uuidv4()}>
              <div className="each-question border border-blue-600 border-sm mb-8 p-6 rounded-xl">
                <span className="flex flex-row gap-4 justify-between items-center">
                  {question}
                  <button type="button" className="down-action-arrow" onClick={() => handleShowAnswer(index)}>
                    &#8964;
                  </button>
                </span>
              </div>
              <div className="each-answer border border-black-600 border-sm my-4 p-6 rounded-xl" style={{ display: showAnswers[index] ? 'block' : 'none' }}>
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
