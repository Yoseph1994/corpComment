import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemTypes = {
  upvoteCount: number;
  company: string;
  daysAgo: number;
  text?: string;
  children?: React.ReactNode; // any valid React component or text
};

function FeedbackItem({
  upvoteCount,
  company,
  daysAgo,
  children,
  text,
}: FeedbackItemTypes) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div className="">
        <p>{company.substring(0, 1)}</p>
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
