import { TFeedbackProps } from "../../lib/constants";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

export default function Container({
  feedbacks,
  setFeedbacks,
  setErrorMessage,
  isLoading,
  setIsLoading,
  errorMessage,
  handleAddFeedback,
}: TFeedbackProps) {
  return (
    <div className="container">
      <Header handleAddFeedback={handleAddFeedback} />
      <FeedbackList
        feedbacks={feedbacks}
        setFeedbacks={setFeedbacks}
        setErrorMessage={setErrorMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        errorMessage={errorMessage}
      />
    </div>
  );
}
