import { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinnet";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackProps } from "../lib/constants";

function FeedbackList({
  isLoading,
  errorMessage,
  feedbacks,
  setFeedbacks,
  setIsLoading,
  setErrorMessage,
}) {
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
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {feedbacks?.map((feedback) => (
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
