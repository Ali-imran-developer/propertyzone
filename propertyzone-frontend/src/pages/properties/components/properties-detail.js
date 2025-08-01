import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import ProductDetail from "./properties-detail-grid";
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const data = location?.state?.item;

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Product Details" customclass="mb-0" />
      <ProductDetail data={data} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProductDetails;