import { useContext } from "react";
import { ItemsContext } from "../contexts/FeedbackItemsContextWrapper";

export const useFeedbackContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within a ItemsContextProvider"
    );
  }
  return context;
};

// how to use the above hook
//  const context = useFeedbackContext();
