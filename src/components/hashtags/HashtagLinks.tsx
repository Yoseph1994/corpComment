import { useFeedbackitemStore } from "../../stores/feedbackitemstore";
import HashtagItem from "./HashtagItem";

function HashtagLinks() {
  const feedbacks = useFeedbackitemStore((state) => state.feedbacks);
  return (
    <ul className="hashtags">
      {feedbacks
        ?.filter((feed, index, array) => {
          return (
            array.findIndex((item) => item.company === feed?.company) === index
          );
        })
        .map((feed) => (
          <HashtagItem key={feed?.company} company={feed?.company} />
        ))}
    </ul>
  );
}

export default HashtagLinks;
