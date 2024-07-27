import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagLinks from "./hashtags/HashtagLinks";
import FeedbackItemsContextWrapper from "../contexts/FeedbackItemsContextWrapper";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextWrapper>
        <Container />
        <HashtagLinks />
      </FeedbackItemsContextWrapper>
    </div>
  );
}

export default App;
