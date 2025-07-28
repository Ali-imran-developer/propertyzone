import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Listing from "./section-components/add-listing";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const AddListing = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Add Listing" />
      <Listing />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default AddListing;
