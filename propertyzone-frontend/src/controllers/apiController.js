import { apiClient } from "../config/api.config";

export const apiRequest = async (
  method,
  url,
  data,
  config = {}
) => {
  try {
    let finalConfig = { ...config };
    let response;
    if (method === "get") {
      response = await apiClient.get(url, finalConfig);
    } else if (method === "delete") {
      response = await apiClient.delete(url, { ...finalConfig, data });
    } else {
      response = await apiClient[method](url, data, finalConfig);
    }
    if (response?.status === 200 || response?.status === 201) {
      return response?.data;
    }
  } catch (error) {
    console.log("@showerror", error);
    throw error?.response
      ? {
          status: error.response.status,
          message: error.response.data?.message || "Request failed",
        }
      : { status: 500, message: "Server Error" };
  }
};
