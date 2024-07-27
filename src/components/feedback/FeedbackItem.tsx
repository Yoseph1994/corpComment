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
  return (
    <li
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
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
