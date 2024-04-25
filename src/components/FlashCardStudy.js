import { v4 as uuidv4 } from 'uuid';
import HintIcon from '../assets/hinticon.png';
import AudioIcon from '../assets/audioicon.png';
import AgainIcon from '../assets/againicon.png';
import MaxIcon from '../assets/maximizeicon.png';

const FlashCardStudy = () => {
  const study = [
    {
      content: '9 + 6 + 7x - 2x - 3',
    },
    {
      content: '2',
    },
    {
      content: '3',
    },
    {
      content: '4',
    },
    {
      content: '5',
    },
    {
      content: '6',
    },
    {
      content: '7',
    },
    {
      content: '8',
    },
    {
      content: '9',
    },
  ];

  return (
    <div className="flashcards-screen">
      <div className="flashcards-slides">
        <div className="hint-audio-bar">
          <img src={HintIcon} alt="Hint" className="flashcard-hint" />
          <img src={AudioIcon} alt="Audio" className="flashcard-audio" />
        </div>
        <div className="flashcard-content">
          {study.map(({
            content,
          }) => (
            <div key={uuidv4()} className="each-slide">{content}</div>
          ))}
        </div>
      </div>
      <div className="flashcard-footer">
        <img src={AgainIcon} alt="again" className="flashcard-again" />
        <img src={MaxIcon} alt="maximize" className="flashcard-maximize" />
      </div>
    </div>
  );
};

export default FlashCardStudy;
