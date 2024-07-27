import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemTypes } from "../../lib/constants";
import { useState } from "react";

function FeedbackItem({
  upvoteCount,
  company,
  daysAgo,
  children,
  text,
}: FeedbackItemTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [upVote, setUpVote] = useState(upvoteCount);

  const handleUpvote = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpVote((prev) => prev + 1);
    event.currentTarget.disabled = true;
    event.stopPropagation();
  };

  return (
    <li
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upVote}</span>
      </button>

      <div className="">
        <p>{company.substring(0, 1).toUpperCase()}</p>
      </div>
      <div className="">
        <p>{company}</p>
        <p>{children ? children : text}</p>
      </div>
      <p>{`${daysAgo} days ago`}</p>
    </li>
  );
}

export default FeedbackItem;
