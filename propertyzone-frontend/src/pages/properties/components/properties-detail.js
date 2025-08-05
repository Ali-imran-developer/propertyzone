import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import ProductDetail from "./properties-detail-grid";
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";
import { useLocation, useParams } from "react-router-dom";
import { useProperties } from "../../../hooks/property";
import { useAppSelector } from "../../../hooks/store-hook";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { handleGetSingleProperty } = useProperties();
  const { singleProperty } = useAppSelector((state) => state.Properties);
  console.log("singleProperty", singleProperty);

  useEffect(() => {
    if (id) {
      handleGetSingleProperty(id);
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Product Details" customclass="mb-0" />
      <ProductDetail data={singleProperty} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProductDetails;