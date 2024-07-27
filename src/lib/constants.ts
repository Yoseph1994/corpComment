export const MAX_CHARACHERS = 150;

export const feedbackstype = [
  {
    companyName: "Google",
    daysAgo: 1,
    upVoteValue: 200,
    comment: "test test test",
  },
  {
    companyName: "rhema",
    daysAgo: 1,
    upVoteValue: 2000000,
    comment: "test test test",
  },
];

export type FeedbackItemTypes = {
  id?: number | string;
  upvoteCount: number;
  company: string;
  daysAgo: number;
  text?: string;
  children?: React.ReactNode; // any valid React component or text
};

export type TFeedbackProps = {
  feedbacks: FeedbackItemTypes[];
  isLoading: boolean;
  errorMessage: string;
  setIsLoading: boolean;
  setErrorMessage: string;
  setFeedbacks: (feedbacks: FeedbackItemTypes[]) => void;
  handleAddFeedback: (text: string) => void;
};
