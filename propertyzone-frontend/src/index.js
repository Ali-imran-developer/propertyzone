import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";

import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Faq from "./pages/faq";
import Error from "./pages/404";
import Shop from "./pages/properties";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./pages/properties/components/properties-detail";
import BlogGrid from "./pages/blogs";
import Blog from "./components/blog";
import BlogDetails from "./pages/blogs/components/blog-details";
import Contact from "./pages/contact";
import Checkout from "./components/checkout";
import MyAccount from "./pages/auth/profile";
import Login from "./pages/auth/signin";
import Register from "./pages/auth/signup";
import AddListing from "./pages/property-listing";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./config/protected";

const Root = () => {
  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-grid" element={<ShopGrid />} />
          <Route path="/product-details/:id" element={<ProdductDetails />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-listing" element={<ProtectedRoute><AddListing /></ProtectedRoute>} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </HashRouter>
  );
};

export default Root;

createRoot(document.getElementById("quarter")).render(<Root />);