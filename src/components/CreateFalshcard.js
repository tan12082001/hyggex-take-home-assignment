import MidSectionLogo from '../assets/barlogowithpublish.png';

const CreateFlashCardSection = () => (
  <div className="create-flashcard-section">
    <div className="create-flashcard-section-logo">
      <img src={MidSectionLogo} alt="Hyggex logo" className="midsection-logo" />
    </div>
    <div className="create-new-flashcard-section">
      <button type="button" className="add-icon">&#x002B;</button>
      <div className="create-new-heading">Create Flashcard</div>
    </div>
  </div>
);

export default CreateFlashCardSection;
