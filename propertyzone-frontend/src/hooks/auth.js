import { useState } from "react";
import toast from "react-hot-toast";
import AuthController from "../controllers/authController";

export const useAuth = () => {
  const [isLoading, setLoading] = useState(false);

  const handleRegisterUser = async (values) => {
    try {
      setLoading(true);
      const data = await AuthController.registerUser(values);
      toast.success(data?.message);
      if (data?.token && data?.user) {
        AuthController.setSession({ token: data.token });
        AuthController.setSession({ user: data.user });
      };
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginUser = async (values) => {
    try {
      setLoading(true);
      const data = await AuthController.loginUser(values);
      toast.success(data?.message);
      if (data?.token && data?.user) {
        AuthController.setSession({ token: data.token });
        AuthController.setSession({ user: data.user });
      };
      return data;
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutUser = async () => {
    try {
      setLoading(true);
      await AuthController.logout();
      toast.success("User logout successfully!");
    } catch (error) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, handleRegisterUser, handleLoginUser, handleLogoutUser };
};
