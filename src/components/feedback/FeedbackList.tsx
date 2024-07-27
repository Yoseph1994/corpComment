import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinnet";
import ErrorMessage from "../ErrorMessage";

function FeedbackList({
  isLoading,
  errorMessage,
  feedbacks,
  setFeedbacks,
  setIsLoading,
  setErrorMessage,
}) {
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
