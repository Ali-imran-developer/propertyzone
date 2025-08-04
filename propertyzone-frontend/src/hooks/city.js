import { useState } from "react";
import { useAppDispatch } from "./store-hook";
import toast from "react-hot-toast";
import CitiesController from "../controllers/cityController";
import { setCities } from "../store/slices/citiesSlice";

export const useCities = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleGetBlogs = async () => {
    try {
      setLoading(true);
      const data = await CitiesController.getCities();
      dispatch(setCities(data));
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
