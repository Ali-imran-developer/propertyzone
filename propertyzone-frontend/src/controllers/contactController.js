import { apiRequest } from "./apiController";

class ContactController {
  static createContact(values) {
    return apiRequest("post", `/api/contact/create`, values);
  }
}

export default ContactController;