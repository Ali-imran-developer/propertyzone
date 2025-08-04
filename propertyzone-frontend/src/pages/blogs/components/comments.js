import { useFormik } from "formik";
import { useReviews } from "../../../hooks/reviews";
import { LoaderIcon } from "react-hot-toast";
import { useAppSelector } from "../../../hooks/store-hook";
import DateCell from "../../../components/shared/components/date-cell";
import { ensureArray } from "../../../helper-functions/formater-helper";
import { useEffect } from "react";

const Comments = () => {
  const { reviewsData } = useAppSelector((state) => state.Reviews);
  const { isLoading, handleCreateReviews, handleGetReviews } = useReviews();

  const initialValues = {
    name: "",
    email: "",
    website: "",
    comments: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("values", values);
        handleCreateReviews(values);
        resetForm({ values: initialValues });
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    },
  });

  useEffect(() => {
    handleGetReviews();

  }, []);

  return (
    <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mt-30 mb-60">
      <h4 className="title-2">Customer Reviews</h4>
      <div className="ltn__comment-area mb-30">
        {ensureArray(reviewsData?.reviews)?.map((item, index) => (
          <div key={index} className="ltn__comment-inner">
            <ul>
              <li>
                <div className="ltn__comment-item clearfix">
                  <div className="ltn__commenter-comment">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <h6 href="#">{item?.name ?? ""}</h6>,
                      <span>{item?.email ?? ""}</span>
                    </div>
                    <p style={{ padding: "0px", margin: "0px" }}>
                      {item?.comments ?? ""}
                    </p>
                    <span className="ltn__comment-reply-btn">
                      <DateCell date={new Date(item?.createdAt ?? "")} />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="ltn__comment-reply-area ltn__form-box mb-10">
        <form onSubmit={formik?.handleSubmit}>
          <h4>Add a Review</h4>
          <div className="input-item input-item-textarea ltn__custom-icon">
            <textarea
              name="comments"
              value={formik?.values?.comments}
              onChange={formik?.handleChange}
              placeholder="Type your comments...."
            />
          </div>
          <div className="input-item input-item-name ltn__custom-icon">
            <input
              type="text"
              name="name"
              value={formik?.values?.name}
              onChange={formik?.handleChange}
              placeholder="Type your name...."
            />
          </div>
          <div className="input-item input-item-email ltn__custom-icon">
            <input
              type="email"
              name="email"
              value={formik?.values?.email}
              onChange={formik?.handleChange}
              placeholder="Type your email...."
            />
          </div>
          <div className="input-item input-item-website ltn__custom-icon">
            <input
              type="text"
              name="website"
              value={formik?.values?.website}
              onChange={formik?.handleChange}
              placeholder="Type your website...."
            />
          </div>
          <div className="btn-wrapper">
            <button
              className="btn theme-btn-1 btn-effect-1 text-uppercase"
              type="submit"
            >
              {isLoading ? <LoaderIcon /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;