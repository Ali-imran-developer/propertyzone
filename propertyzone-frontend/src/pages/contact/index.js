import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import ContactInfo from "./components/contact-info";
import ContactForm from "./components/contact-form";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact Us" subheader="Contact" />
      <ContactInfo />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Contact;