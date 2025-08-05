import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import Faq from "./components/faq";
import Counter from "./components/counter";
import BlogSlider from "../dashboard/components/blog-slider";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const FaqPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Frequently asked questions" subheader="FAQ" />
      <Faq />
      <Counter />
      <BlogSlider />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FaqPage;