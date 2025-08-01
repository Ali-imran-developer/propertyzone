import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import AboutMine from "./components/about";
import Features from "./components/features";
import Testimonial from "./components/testimonial";
import BlogSlider from "../dashboard/components/blog-slider";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const About = () => {

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About Us" />
      <AboutMine />
      <Features customClass="ltn__feature-area section-bg-1 pt-30 pb-40 mb-120---" />
      <Testimonial />
      <BlogSlider />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;