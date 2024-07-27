import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinnet";
import ErrorMessage from "../ErrorMessage";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/FeedbackItemsContextWrapper";

function FeedbackList() {
  const context = useContext(ItemsContext);
  if (!context) throw new Error("No context wrapper");
  const { filteredFeedbacks, isLoading, errorMessage } = context;
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
