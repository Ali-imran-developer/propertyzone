import { apiRequest } from "./apiController";

class propertiesController {
  static getProperties() {
    return apiRequest("get", `/api/property/get`);
  }
  static addProperties(data) {
    return apiRequest("post", "/api/property/create", data);
  }
}

export default propertiesController;