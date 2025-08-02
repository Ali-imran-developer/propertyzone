import { apiRequest } from "./apiController";

class ReviewsController {
  static getReviews() {
    return apiRequest("get", `/api/reviews/get`);
  }
  static addReviews(data) {
    return apiRequest("post", "/api/reviews/create", data);
  }
}

export default ReviewsController;