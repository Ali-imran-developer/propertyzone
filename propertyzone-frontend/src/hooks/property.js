import { useState } from "react";
import { useAppDispatch } from "./store-hook";
import { setAddress, setProperties, setPropertyId, setSingleProperty } from "../store/slices/property-slice";
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

  const handleGetLocation = async (param) => {
    try {
      setLoading(true);
      const data = await propertiesController.getLocation(param);
      dispatch(setAddress(data));
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocationId = async (param) => {
    try {
      setLoading(true);
      const data = await propertiesController.getLocationID(param);
      dispatch(setPropertyId(data?.propertyId))
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetSingleProperty = async (param) => {
    try {
      setLoading(true);
      const data = await propertiesController.getSingleProperty(param);
      dispatch(setSingleProperty(data))
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { Loading, handleGetProperties, handleGetLocation, handleGetLocationId, handleCreateProperties, handleGetSingleProperty };
};
