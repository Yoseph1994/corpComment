import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagLinks from "./hashtags/HashtagLinks";

function App() {
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagLinks />
    </div>
  );
}

export default App;
