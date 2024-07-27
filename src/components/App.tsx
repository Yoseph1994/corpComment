import { useEffect, useMemo, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import { FeedbackItemTypes } from "../lib/constants";
import HashtagLinks from "./hashtags/HashtagLinks";

function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [filterBy, setFilterBy] = useState("");

  // how cam i useMemo here and filter by the filterBy state

  const filteredFeedbacks = useMemo(() => {
    return filterBy
      ? feedbacks.filter((feed) =>
          feed.company.toLowerCase().includes(filterBy.toLowerCase())
        )
      : feedbacks;
  }, [feedbacks, filterBy]);

  const handleAddFeedback = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: FeedbackItemTypes = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName?.substring(0, 1).toUpperCase(),
    };
    setFeedbacks([...feedbacks, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error();
        }
        const data = await response.json();
        setFeedbacks(data?.feedbacks);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage("something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        feedbacks={filteredFeedbacks}
        setFeedbacks={setFeedbacks}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleAddFeedback={handleAddFeedback}
      />
      <HashtagLinks
        setFeedbacks={setFeedbacks}
        feedbacks={feedbacks}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;
