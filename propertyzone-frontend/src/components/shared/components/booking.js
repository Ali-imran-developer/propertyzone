import { useFormik } from "formik";
import { useBooking } from "../../../hooks/booking";
import { LoaderIcon } from "react-hot-toast";

const Booking = ({ propertyName }) => {
  const { isLoading, handleCreateBooking } = useBooking();

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("values", values);
        handleCreateBooking({ ...values, propertyName});
        resetForm({ values: initialValues });
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    },
  });

  return (
    <div className="widget ltn__form-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Drop Messege For Book
      </h4>
      <form onSubmit={formik?.handleSubmit}>
        <input
          type="text"
          value={formik?.values?.name}
          onChange={formik.handleChange}
          name="name"
          placeholder="Your Name*"
        />
        <input
          type="email"
          value={formik?.values?.email}
          onChange={formik?.handleChange}
          name="email"
          placeholder="Your e-Mail*"
        />
        <textarea
          name="message"
          value={formik?.values?.message}
          onChange={formik?.handleChange}
          placeholder="Write Message..."
        />
        <button type="submit" className="btn theme-btn-1" style={{width: "200px"}}>
          {isLoading ? <LoaderIcon /> : "Send Messege"}
        </button>
      </form>
    </div>
  );
};

export default Booking;