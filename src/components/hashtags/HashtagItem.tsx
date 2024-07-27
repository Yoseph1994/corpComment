import { useContext } from "react";
import { ItemsContext } from "../../contexts/FeedbackItemsContextWrapper";

type HashtagItemProps = {
  company: string;
};

export default function HashtagItem({ company }: HashtagItemProps) {
  const context = useContext(ItemsContext);
  if (!context)
    throw new Error("Context  is required for HashtagItem properties to work");
  const { setFilterBy } = context;
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
