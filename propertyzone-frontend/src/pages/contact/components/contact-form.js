import { useFormik } from "formik";
import { useContact } from "../../../hooks/contact";
import { LoaderIcon } from "react-hot-toast";

const ContactForm = () => {
  const { isLoading, handleCreateContact } = useContact();
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("values", values);
        handleCreateContact(values);
        resetForm({ values: initialValues });
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    },
  });

  return (
    <div className="ltn__contact-message-area" style={{ marginBottom: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">Get A Quote</h4>
              <form id="contact-form" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="name"
                        value={formik?.values?.name}
                        onChange={formik?.handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        type="email"
                        name="email"
                        value={formik?.values?.email}
                        onChange={formik?.handleChange}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        type="number"
                        name="phoneNumber"
                        value={formik?.values?.phoneNumber}
                        onChange={formik?.handleChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    name="message"
                    value={formik?.values?.message}
                    onChange={formik?.handleChange}
                    placeholder="Enter message"
                  />
                </div>
                <p>
                  <label className="input-info-save mb-0">
                    <input type="checkbox" name="agree" /> Save my name, email,
                    and website in this browser for the next time I comment.
                  </label>
                </p>
                <div className="btn-wrapper mt-0">
                  <button
                    style={{width: "250px", display: "flex", justifyContent: "center", alignItems: "center"}}
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    {isLoading ? <LoaderIcon style={{width: "20px", height: "20px"}} /> : "Get a free service"}
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;