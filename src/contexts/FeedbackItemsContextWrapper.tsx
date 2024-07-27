import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FeedbackItemTypes } from "../lib/constants";

type wrapperType = {
  children: React.ReactNode; // any valid React component or text
};

type TItemsContext = {
  feedbacks: FeedbackItemTypes[];
  isLoading: boolean;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage?: Dispatch<SetStateAction<string>>;
  handleAddFeedback: (feed: string) => void;
  filteredFeedbacks: FeedbackItemTypes[];
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  setFeedbacks?: Dispatch<SetStateAction<FeedbackItemTypes[]>>;
};

export const ItemsContext = createContext<TItemsContext | null>(null);
function FeedbackItemsContextWrapper({ children }: wrapperType) {
  const [feedbacks, setFeedbacks] = useState<FeedbackItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleAddFeedback = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: FeedbackItemTypes = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName?.substring(0, 1).toUpperCase(),
    };
    setFeedbacks([...feedbacks, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const filteredFeedbacks = useMemo(() => {
    return filterBy
      ? feedbacks.filter((feed) =>
          feed.company.toLowerCase().includes(filterBy.toLowerCase())
        )
      : feedbacks;
  }, [feedbacks, filterBy]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error();
        }
        const data = await response.json();
        setFeedbacks(data?.feedbacks);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage("something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        feedbacks,
        isLoading,
        errorMessage,
        handleAddFeedback,
        filteredFeedbacks,
        filterBy,
        setFilterBy,
        setIsLoading,
        setErrorMessage,
        setFeedbacks,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default FeedbackItemsContextWrapper;
