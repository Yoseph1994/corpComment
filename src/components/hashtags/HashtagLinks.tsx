import { useContext } from "react";
import HashtagItem from "./HashtagItem";
import { ItemsContext } from "../../contexts/FeedbackItemsContextWrapper";

function HashtagLinks() {
  const context = useContext(ItemsContext);
  if (!context)
    throw new Error(" ItemsContext is required for hashtag links to work");
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
