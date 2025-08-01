import Navbar from "../../components/shared/components/navbar";
import Banner from "./components/banner";
import Features from "./components/features";
import ProductSlider from "./components/product-slider";
import Video from "./components/video";
import Category from "./components/category";
import BlogSlider from "./components/blog-slider";
import Footer from "../../components/shared/components/footer";
import CallToAction from "../../components/shared/components/call-to-action";

const Dashboard = () => {
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
      <Banner />
      <Features customClass="ltn__feature-area section-bg-1 pt-20 pb-20 mb-120---" />
      <ProductSlider />
      <Video />
      <Category />
      <BlogSlider customClass="section-subtitle-2" />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Dashboard;