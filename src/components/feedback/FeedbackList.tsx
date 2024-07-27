import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinnet";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackContext } from "../../lib/hooks";

function FeedbackList() {
  const context = useFeedbackContext();
  const { isLoading, errorMessage, filteredFeedbacks } = context;
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
