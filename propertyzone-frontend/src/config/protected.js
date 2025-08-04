import { Navigate } from "react-router-dom";
import AuthController from "../controllers/authController";

const ProtectedRoute = ({ children }) => {
  const data = AuthController.getSession();
  const isAuthenticated = data?.user?.name && data?.user?.email;

  return isAuthenticated ? children : <Navigate to="/#" replace />;
};

export default ProtectedRoute;