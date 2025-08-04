import { apiRequest } from "./apiController";

class BlogsController {
  static getBlogs() {
    return apiRequest("get", `/api/blogs/get`);
  }
}

export default BlogsController;