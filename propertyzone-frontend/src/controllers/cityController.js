import { apiRequest } from "./apiController";

class CitiesController {
  static getCities() {
    return apiRequest("get", `/api/city/getCities`);
  }
}

export default CitiesController;