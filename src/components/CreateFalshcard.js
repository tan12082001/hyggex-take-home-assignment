import MidSectionLogo from '../assets/barlogowithpublish.png';

const CreateFlashCardSection = () => (
  <div className="create-flashcard-section flex flex-row justify-between items-center">
    <div className="create-flashcard-section-logo">
      <img src={MidSectionLogo} alt="Hyggex logo" className="midsection-logo" />
    </div>
    <div className="create-new-flashcard-section flex flex-row gap-4 items-center">
      <button type="button" className="add-icon w-9 h-9 bg-gradient-to-b from-blue-900 to-blue-700 text-white text-2xl rounded-full">&#x002B;</button>
      <div className="create-new-heading">Create Flashcard</div>
    </div>
  </div>
);

export default CreateFlashCardSection;
