import { create } from "zustand";
import { FeedbackItemTypes } from "../lib/constants";

export const useFeedbackitemStore = create((set, get) => ({
  feedbacks: [],
  isLoading: false,
  errorMessage: "",
  filterBy: "",

  setFilterBy: (filterLabel: string) => {
    set(() => ({ filterBy: filterLabel }));
  },

  getfilteredFeedbacks: () => {
    const state = get();
    return state.filterBy
      ? state.feedbacks.filter((feed) =>
          feed.company.toLowerCase().includes(state.filterBy.toLowerCase())
        )
      : state.feedbacks;
  },
  AddFeedback: async (text: string) => {
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

    set((state) => ({ feedbacks: [...state.feedbacks, newItem] }));
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
  },
  fetchFeedbacks: async () => {
    try {
      set(() => ({ isLoading: true }));
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        set(() => ({ isLoading: false }));
        throw new Error();
      }
      const data = await response.json();
      set(() => ({ feedbacks: data?.feedbacks }));
    } catch (error) {
      set(() => ({ isLoading: false, errorMessage: "Something went wrong" }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
}));
