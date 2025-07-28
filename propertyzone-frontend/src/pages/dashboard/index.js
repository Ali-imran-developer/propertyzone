import Navbar from "../../components/global-components/navbar-v4";
import Banner from "./components/banner";
import Features from "./components/features";
import ProductSlider from "./components/product-slider";
import Gallery from "./components/gallery";
import Apartment from "./components/apartment";
import Video from "./components/video";
import Category from "./components/category";
import Testimonial from "./components/testimonial";
import BlogSlider from "./components/blog-slider";
import Footer from "../../components/global-components/footer";
import CallToAction from "./components/call-to-action";

const Dashboard = () => {
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
      <Banner />
      {/* <Aboutv2 /> */}
      <Features customClass="ltn__feature-area section-bg-1 pt-20 pb-20 mb-120---" />
      <ProductSlider />
      <Gallery />
      <Apartment CustomClass="pt-115" />
      <Video />
      <Category />
      <Testimonial />
      <BlogSlider customClass="section-subtitle-2" />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Dashboard;
