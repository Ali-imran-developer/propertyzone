import Navbar from "../../components/shared/components/navbar2";
import PageHeader from "../../components/shared/components/page-header";
import CallToAction from "../../components/shared/components/call-to-action";
import Footer from "../../components/shared/components/footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="404 Page" />
      <div className="ltn__404-area ltn__404-area-1 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-404-inner text-center">
                <div className="error-img mb-30">
                  <img
                    src={publicUrl + "assets/img/others/error-1.png"}
                    alt="#"
                  />
                </div>
                <h1 className="error-404-title d-none">404</h1>
                <h2>Page Not Found!</h2>
                <p>
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <div className="btn-wrapper go-top">
                  <Link to="/" className="btn btn-transparent">
                    <i className="fas fa-long-arrow-alt-left" /> BACK TO HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ErrorPage;