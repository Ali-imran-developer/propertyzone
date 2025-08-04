import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import PropertiesGrid from "./components/properties-grid";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const Porperties = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Properties" />
      <PropertiesGrid />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Porperties;