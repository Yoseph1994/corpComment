import HashtagItem from "./HashtagItem";

function HashtagLinks({ feedbacks, setFilterBy }) {
  return (
    <ul className="hashtags">
      {feedbacks
        .filter((feed, index, array) => {
          return (
            array.findIndex((item) => item.company === feed.company) === index
          );
        })
        .map((feed) => (
          <HashtagItem
            key={feed.company}
            company={feed.company}
            setFilterBy={setFilterBy}
          />
        ))}
    </ul>
  );
}

export default HashtagLinks;
