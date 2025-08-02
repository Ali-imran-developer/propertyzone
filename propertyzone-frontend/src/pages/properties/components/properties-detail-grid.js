import { Link } from "react-router-dom";
import DateCell from "../../../components/shared/components/date-cell";
import { useProperties } from "../../../hooks/property";
import { useAppSelector } from "../../../hooks/store-hook";
import { useEffect } from "react";
import { ensureArray, formatPrice } from "../../../helper-functions/formater-helper";
import { topCategories } from "../../../data/topCategories";
import { useFormik } from "formik";
import { useReviews } from "../../../hooks/reviews";
import { LoaderIcon } from "react-hot-toast";

const ShopDetails = ({ data }) => {
  const { handleGetProperties } = useProperties();
  const { isLoading, handleCreateReviews, handleGetReviews } = useReviews();
  const { propertyData } = useAppSelector((state) => state.Properties);
  const { reviewsData } = useAppSelector((state) => state.Reviews);
  const initialParams = { page: 1, limit: 5, search: "" };

  useEffect(() => {
    handleGetReviews();
    handleGetProperties(initialParams);
  }, [initialParams?.page, initialParams?.limit, initialParams?.search]);
  let publicUrl = process.env.PUBLIC_URL + "/";

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

  return (
    <div className="ltn__shop-details-area pb-10" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul style={{ display: "flex" }}>
                  <li className="ltn__blog-category">
                    <Link to="#">Featured</Link>
                  </li>
                  <li className="ltn__blog-category">
                    <Link className="bg-orange" to="#">
                      For {data?.status ?? ""}
                    </Link>
                  </li>
                  <li
                    className="ltn__blog-date"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    <i className="far fa-calendar-alt" />
                    <DateCell date={new Date(data?.createdAt ?? "")} />
                  </li>
                </ul>
              </div>
              <h1>{data?.title ?? ""}</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                {data?.address?.address ?? ""}, {data?.address?.city ?? ""}
              </label>
              <h4 className="title-2">Description</h4>
              <p>{data?.description ?? ""}</p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                  <li>
                    <label>Property ID:</label>{" "}
                    <span>{data?.propertyId ?? ""}</span>
                  </li>
                  <li>
                    <label>Home Area: </label>{" "}
                    <span>{data?.homeArea ?? 0} sqft</span>
                  </li>
                  <li>
                    <label>Rooms:</label> <span>{data?.rooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>{data?.bathrooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Year built:</label>{" "}
                    <span>{data?.builted ?? ""}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>Lot Area:</label> <span>{data?.lotArea ?? ""}</span>
                  </li>
                  <li>
                    <label>Lot dimensions:</label>{" "}
                    <span>{data?.lotDimensions ?? 0} sqft</span>
                  </li>
                  <li>
                    <label>Beds:</label> <span>{data?.bedrooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>Rs. {data?.price ?? 0}</span>
                  </li>
                  <li>
                    <label>Property Status:</label>{" "}
                    <span>For {data?.status ?? ""}</span>
                  </li>
                </ul>
              </div>
              {data?.area?.livingRoom &&
              data?.area?.garage &&
              data?.area?.dining !== null ? (
                <>
                  <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Living Room</h6>
                            <small>{data?.area?.livingRoom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Garage</h6>
                            <small>{data?.area?.garage ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Dining Area</h6>
                            <small>{data?.area?.dining ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Bedroom</h6>
                            <small>{data?.area?.bedroom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Bathroom</h6>
                            <small>{data?.area?.bathroom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Gym Area</h6>
                            <small>{data?.area?.gym ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Garden</h6>
                            <small>{data?.area?.garden ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Parking</h6>
                            <small>{data?.area?.parking ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
              <h4 className="title-2">From Our Gallery</h4>
              <div className="ltn__property-details-gallery mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <a href={data?.images[0] ?? ""} data-rel="lightcase:myCollection">
                      <img
                        className="mb-30"
                        src={data?.images[0] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                    <a href={data?.images[1] ?? ""} data-rel="lightcase:myCollection">
                      <img
                        className="mb-30"
                        src={data?.images[1] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href={data?.images[2] ?? ""} data-rel="lightcase:myCollection">
                      <img
                        className="mb-30"
                        src={data?.images[2] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "390px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                <h4 className="title-2">Customer Reviews</h4>
                <div className="ltn__comment-area mb-30">
                  {ensureArray(reviewsData?.reviews)?.map((item, index) => (
                    <div key={index} className="ltn__comment-inner">
                      <ul>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-comment">
                              <div style={{display: "flex", alignItems: "center", gap: "2px"}}>
                                <h6 href="#">{item?.name ?? ""}</h6>,
                                <span>{item?.email ?? ""}</span>
                              </div>
                              <p style={{padding: "0px", margin: "0px"}}>
                                {item?.comments ?? ""}
                              </p>
                              <span className="ltn__comment-reply-btn">
                                <DateCell date={new Date(data?.createdAt ?? "")} />
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
                      <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
                        {isLoading ? <LoaderIcon /> : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
              <div className="widget ltn__top-rated-product-widget go-top">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Top Rated Product
                </h4>
                <ul>
                  <li>
                    {ensureArray(propertyData?.properties)?.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="top-rated-product-item clearfix"
                          style={{ marginBottom: "12px" }}
                        >
                          <div className="top-rated-product-img">
                            <Link
                              to="/product-details"
                              style={{ width: "100px", height: "auto" }}
                            >
                              <img
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  objectFit: "cover",
                                }}
                                src={
                                  item?.images[0] ??
                                  "/assets/img/pictures/image-placeholder.jpg"
                                }
                                alt={item?.title ?? ""}
                              />
                            </Link>
                          </div>
                          <div className="top-rated-product-info">
                            <h6>
                              <Link to="/shop">{item?.title ?? ""}</Link>
                            </h6>
                            <div className="product-price">
                              <span>Rs. {formatPrice(item?.price) ?? 0}</span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </li>
                </ul>
              </div>
              <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Top Categories
                </h4>
                <ul className="go-top">
                  <li>
                    {ensureArray(topCategories)?.map((item, index) => (
                      <Link
                        key={index}
                        to="/blog-grid"
                        style={{ marginBottom: "10px" }}
                      >
                        {item?.name ?? ""} <span>({item?.total ?? 0})</span>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="widget ltn__social-media-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Follow us
                </h4>
                <div className="ltn__social-media-2">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com" target="_blank" title="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        title="Linkedin"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget ltn__banner-widget d-none go-top">
                <Link to="/shop">
                  <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;