import { apiRequest } from "./apiController";

class BookingController {
  static getBooking(values) {
    return apiRequest("post", `/api/booking/create`, values);
  }
}

export default BookingController;