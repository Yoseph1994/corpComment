import { useState } from "react";
import { MAX_CHARACHERS } from "../../lib/constants";
import { useFeedbackContext } from "../../lib/hooks";

function FeedbackForm() {
  const context = useFeedbackContext();
  const { handleAddFeedback } = context;
  const [comment, setComment] = useState("");
  const charCount = MAX_CHARACHERS - comment.length;
  const charLimitExceeded = charCount <= 0;
  const [showInValidIndicator, setShowInValidIndicator] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    if (!comment.includes("#") || comment.length < 5) {
      setShowInValidIndicator(true);
      setTimeout(() => setShowInValidIndicator(false), 2000);
      return;
    }
    handleAddFeedback(comment);
    setComment("");
  }

  return (
    <form className={`form ${showInValidIndicator && "form--invalid"}`}>
      <textarea
        id="feedback-textarea"
        value={comment}
        placeholder="blabla"
        spellCheck={false}
        onChange={handleChange}
        maxLength={MAX_CHARACHERS}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button disabled={charLimitExceeded} onClick={handleSubmit}>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
