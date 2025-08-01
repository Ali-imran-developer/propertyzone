import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import Login from "./components/form";
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="SignIn" subheader="Signin" />
      <Login />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Signin;