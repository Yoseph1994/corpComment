import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import SideLinks from "./SideLinks";
import { FeedbackItemTypes, TstatesForFeedback } from "../lib/constants";

function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddFeedback = (text: string) => {
    const newItem: FeedbackItemTypes = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: text
        .split(" ")
        .find((word) => word.includes("#"))!
        .substring(1),
    };
    setFeedbacks([...feedbacks, newItem]);
  };

  return (
    <div className="app">
      <Footer />
      <Container
        feedbacks={feedbacks}
        setFeedbacks={setFeedbacks}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleAddFeedback={handleAddFeedback}
      />
      <SideLinks />
    </div>
  );
}

export default App;
