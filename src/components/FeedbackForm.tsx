import { useState } from "react";
import { MAX_CHARACHERS } from "../lib/constants";

function FeedbackForm() {
  const [comment, setComment] = useState("");
  const charCount = MAX_CHARACHERS - comment.length;
  const charLimitExceeded = charCount <= 0;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  return (
    <form className="form">
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
        <button disabled={charLimitExceeded}>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
