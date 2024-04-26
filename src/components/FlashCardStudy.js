import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import HintIcon from '../assets/hinticon.png';
import AudioIcon from '../assets/audioicon.png';
import AgainIcon from '../assets/againicon.png';
import MaxIcon from '../assets/maximizeicon.png';

const FlashCardStudy = ({ study }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === study.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? study.length - 1 : currentSlide - 1);
  };

  const slideStyles = {
    display: 'flex',
    width: '100%',
    overflowX: 'hidden',
  };

  const eachSlideStyles = {
    flex: '0 0 auto',
    width: '100%',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  return (
    <div className="flashcards-screen">
      <div className="flashcards-slides">
        <div className="hint-audio-bar">
          <img src={HintIcon} alt="Hint" className="flashcard-hint" />
          <img src={AudioIcon} alt="Audio" className="flashcard-audio" />
        </div>
        <div className="flashcard-content" style={slideStyles}>
          {study.map(({ content }) => (
            <div key={uuidv4()} className="each-slide" style={eachSlideStyles}>
              {content}
            </div>
          ))}
        </div>
      </div>
      <div className="flashcard-footer">
        <img src={AgainIcon} alt="again" className="flashcard-again" />
        <div className="previous-next-count-outer">
          <button type="button" className="next-slide-button" onClick={nextSlide}>&#x2c3;</button>
          <div className="slide-count">
            {currentSlide + 1}
            /
            {study.length}
          </div>
          <button type="button" className="previous-slide-button" onClick={prevSlide}>&#x2c2;</button>
        </div>
        <img src={MaxIcon} alt="maximize" className="flashcard-maximize" />
      </div>
    </div>
  );
};

FlashCardStudy.propTypes = {
  study: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FlashCardStudy;
