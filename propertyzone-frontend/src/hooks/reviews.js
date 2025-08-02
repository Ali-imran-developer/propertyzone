import { useState } from "react";
import { useAppDispatch } from "./store-hook";
import toast from "react-hot-toast";
import ReviewsController from "../controllers/reviewsController";
import { setReviews } from "../store/slices/reviews-slice";

export const useReviews = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleCreateReviews = async (payload) => {
    try {
      setLoading(true);
      const data = await ReviewsController.addReviews(payload);
      dispatch(setReviews(data));
      toast.success(data?.message);
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetReviews = async () => {
    try {
      setLoading(true);
      const data = await ReviewsController.getReviews();
      dispatch(setReviews(data));
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, handleGetReviews, handleCreateReviews };
};
