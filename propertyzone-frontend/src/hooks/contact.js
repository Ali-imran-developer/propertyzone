import { useState } from "react";
import toast from "react-hot-toast";
import ContactController from "../controllers/contactController";

export const useContact = () => {
  const [isLoading, setLoading] = useState(false);

  const handleCreateContact = async (values) => {
    console.log("values", values);
    try {
      setLoading(true);
      const data = await ContactController.createContact(values);
      toast.success(data?.message);
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, handleCreateContact };
};
