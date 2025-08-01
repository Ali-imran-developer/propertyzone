import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import Listing from "./components/form";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const PorpertyListing = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Add Properties" />
      <Listing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PorpertyListing;