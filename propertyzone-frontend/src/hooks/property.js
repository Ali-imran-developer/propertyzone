import { useState } from "react";
import { useAppDispatch } from "./store-hook";
import { setProperties } from "../store/slices/property-slice";
import propertiesController from "../controllers/properties";
import toast from "react-hot-toast";

export const useProperties = () => {
  const dispatch = useAppDispatch();
  const [Loading, setLoading] = useState(false);

  const handleCreateProperties = async (payload) => {
    try {
      setLoading(true);
      const data = await propertiesController.addProperties(payload);
      dispatch(setProperties(data));
      toast.success(data?.message);
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetProperties = async (queryParams) => {
    try {
      setLoading(true);
      const data = await propertiesController.getProperties(queryParams);
      dispatch(setProperties(data));
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { Loading, handleGetProperties, handleCreateProperties };
};
