import { TriangleUpIcon } from "@radix-ui/react-icons";
function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>670</span>
        </button>

        <div className="">
          <p>B</p>
        </div>
        <div className="">
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo
            inventore obcaecati, iure eaque alias eligendi tempora blanditiis
            sunt aperiam atque, itaque architecto aspernatur reiciend
          </p>
        </div>
        <p>4 days ago</p>
      </li>
    </ol>
  );
}

export default FeedbackList;
