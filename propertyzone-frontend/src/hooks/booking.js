import { useState } from "react";
import toast from "react-hot-toast";
import BookingController from "../controllers/bookingController";

export const useBooking = () => {
  const [isLoading, setLoading] = useState(false);

  const handleCreateBooking = async (values) => {
    console.log("values", values);
    try {
      setLoading(true);
      const data = await BookingController.getBooking(values);
      toast.success(data?.message);
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, handleCreateBooking };
};
