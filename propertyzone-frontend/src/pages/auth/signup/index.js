import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import Register from './components/form';
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";

const Signup = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="SignUp" subheader="Signup" />
        <Register />
        <CallToAction />
        <Footer />
    </div>
}

export default Signup;