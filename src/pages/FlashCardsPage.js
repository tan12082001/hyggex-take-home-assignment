import CreateFlashCardSection from '../components/CreateFalshcard';
import FaqSection from '../components/FaqSection';
import FlashcardPreview from '../components/FlashcardPreview';

const FlashcardsPage = () => (
  <div className="falshcards-page-outer px-10 py-4 md:px-24">
    {/* Need to add path display component */}
    <FlashcardPreview />
    <CreateFlashCardSection />
    <FaqSection />
  </div>
);

export default FlashcardsPage;
