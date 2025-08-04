import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../../hooks/auth";
import { LoaderIcon } from "react-hot-toast";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignupForm = () => {
  const { isLoading , handleRegisterUser } = useAuth();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values);
      try {
        handleRegisterUser(values);
        resetForm({ values: initialValues });
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    },
  });

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Register <br />
                Your Account
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form onSubmit={formik.handleSubmit} className="ltn__form-box contact-form-box">
                <input
                  type="text"
                  name="name"
                  value={formik?.values?.name}
                  onChange={formik?.handleChange}
                  placeholder="Name*"
                />
                <input
                  type="email"
                  name="email"
                  value={formik?.values?.email}
                  onChange={formik?.handleChange}
                  placeholder="Email*"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={formik?.values?.password}
                  onChange={formik?.handleChange}
                />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />
                  &nbsp; I consent to Herboil processing my personal data in
                  order to send personalized marketing material in accordance
                  with the consent form and the privacy policy.
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue /> &nbsp; By clicking
                  "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    style={{width: "240px", display: "flex", alignItems: "center", justifyContent: "center"}}
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                  >
                    {isLoading ? <LoaderIcon style={{width: "20px", height: "20px"}} /> : "CREATE ACCOUNT"}
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="#">
                    TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                    POLICY
                  </a>
                </p>
                <div className="go-to-btn mt-50 go-top">
                  <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;