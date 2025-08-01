import { apiRequest } from "./apiController";

class propertiesController {
  static getProperties(queryParams) {
    return apiRequest("get", `/api/property/get?page=${queryParams?.page}&limit=${queryParams?.limit}&search=${queryParams?.search}`);
  }
  static addProperties(data) {
    return apiRequest("post", "/api/property/create", data);
  }
}

export default propertiesController;