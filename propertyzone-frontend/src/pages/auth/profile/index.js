import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import Tabs from "./components/tabs";
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";

const MyProfile = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="My Account" />
      <Tabs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MyProfile;
