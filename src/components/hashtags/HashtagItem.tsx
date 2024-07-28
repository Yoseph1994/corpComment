import { useFeedbackitemStore } from "../../stores/feedbackitemstore";

type HashtagItemProps = {
  company: string;
};

export default function HashtagItem({ company }: HashtagItemProps) {
  const setFilterBy = useFeedbackitemStore((state) => state.setFilterBy);

  return (
    <li key={company}>
      <button
        onClick={() => {
          setFilterBy(company);
        }}
      >
        #{company}
      </button>
    </li>
  );
}
