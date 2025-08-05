import { apiRequest } from "./apiController";

class propertiesController {
  static getProperties(queryParams) {
    return apiRequest("get", `/api/property/get?page=${queryParams?.page}&limit=${queryParams?.limit}&search=${queryParams?.search}`);
  }
  static addProperties(data) {
    return apiRequest("post", "/api/property/create", data);
  }
  static getLocation(param) {
    return apiRequest("get", `/api/property/getLocation?city=${param}`,);
  }
  static getLocationID(queryParams) {
    return apiRequest("get", `/api/property/getLocationID?city=${queryParams?.city}&address=${queryParams?.location}&price=${queryParams?.price}`,);
  }
  static getSingleProperty(param) {
    return apiRequest("get", `/api/property/getSingleProperty?_id=${param}`,);
  }
}

export default propertiesController;