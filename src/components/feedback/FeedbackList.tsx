import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinnet";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackitemStore } from "../../stores/feedbackitemstore";
import { useEffect } from "react";

function FeedbackList() {
  const isLoading = useFeedbackitemStore((state) => state.isLoading);
  const errorMessage = useFeedbackitemStore((state) => state.errorMessage);
  const fetchFeedbacks = useFeedbackitemStore((state) => state.fetchFeedbacks);
  const filteredFeedbacks = useFeedbackitemStore((state) =>
    state.getfilteredFeedbacks()
  );

  useEffect(() => {
    async function getData() {
      await fetchFeedbacks();
    }
    getData();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {filteredFeedbacks?.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          company={feedback.company}
          daysAgo={feedback.daysAgo}
          upvoteCount={feedback.upvoteCount}
          text={feedback.text}
        />
      ))}
    </ol>
  );
}

export default FeedbackList;
