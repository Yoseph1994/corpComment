import { useFeedbackContext } from "../../lib/hooks";
import HashtagItem from "./HashtagItem";

function HashtagLinks() {
  const context = useFeedbackContext();
  const { feedbacks } = context;
  return (
    <ul className="hashtags">
      {feedbacks
        .filter((feed, index, array) => {
          return (
            array.findIndex((item) => item.company === feed.company) === index
          );
        })
        .map((feed) => (
          <HashtagItem key={feed.company} company={feed.company} />
        ))}
    </ul>
  );
}

export default HashtagLinks;
