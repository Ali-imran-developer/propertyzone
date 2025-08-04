import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";

import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Portfolio from "./components/portfolio";
import PortfolioV2 from "./components/portfolio-v2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";

import Shop from "./pages/properties";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./pages/properties/components/properties-detail";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import BlogGrid from "./pages/blogs";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";

import BlogDetails from "./pages/blogs/components/blog-details";
import Contact from "./pages/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./pages/auth/profile";
import Login from "./pages/auth/signin";
import Register from "./pages/auth/signup";
import AddListing from "./pages/property-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./config/protected";

const Root = () => {
  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/service" element={<Service />} /> */}
          {/* <Route path="/service-details" element={<ServiceDetails />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/portfolio-v2" element={<PortfolioV2 />} /> */}
          {/* <Route path="/portfolio-details" element={<PortfolioDetails />} /> */}
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="/team-details" element={<TeamDetails />} /> */}
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
          <Route path="*" element={<Error />} />
          {/* <Route path="/location" element={<Location />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-grid" element={<ShopGrid />} />
          {/* <Route path="/shop-left-sidebar" element={<ShopLeftSidebar />} /> */}
          {/* <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} /> */}
          <Route path="/product-details/:id" element={<ProdductDetails />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          {/* <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} /> */}
          {/* <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-listing" element={<ProtectedRoute><AddListing /></ProtectedRoute>} />
          {/* <Route path="/wishlist" element={<Wishlist />} /> */}
          {/* <Route path="/order-tracking" element={<OrderTracking />} /> */}
          {/* <Route path="/history" element={<History />} /> */}
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </HashRouter>
  );
};

export default Root;

createRoot(document.getElementById("quarter")).render(<Root />);