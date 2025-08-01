import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import BlogGrid from "./components/blog-grid";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const BlogGridPage = () => {

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Blog Grid" />
      <BlogGrid />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default BlogGridPage;
