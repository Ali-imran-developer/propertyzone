import { useState } from "react";
import { useAppDispatch } from "./store-hook";
import toast from "react-hot-toast";
import BlogsController from "../controllers/blogsController";
import { setBlogs } from "../store/slices/blogs-slice";

export const useBlogs = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleGetBlogs = async () => {
    try {
      setLoading(true);
      const data = await BlogsController.getBlogs();
      dispatch(setBlogs(data));
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, handleGetBlogs };
};
