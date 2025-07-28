import axios from "axios";
import AuthController from "../controllers/authController";
export const APP_BASE_URL = "http://localhost:5000";

export const apiClient = axios.create({
  baseURL: APP_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const persistData = AuthController.getSession();
    if (config?.withAuth && persistData?.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${persistData.token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       const { status, data } = error.response;
//       console.log("@statusstatus", error.response.data.message);
//       if (status === 401) {
//         console.log("Unauthorized! Logging out...");
//         AuthController.logout();
//         if (window.location.pathname !== "/login") {
//           window.location.href = "/login";
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );
