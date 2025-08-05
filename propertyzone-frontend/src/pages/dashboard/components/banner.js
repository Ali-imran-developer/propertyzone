import { Link, useNavigate } from "react-router-dom";
import { useCities } from "../../../hooks/city";
import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/store-hook";
import { ensureArray } from "../../../helper-functions/formater-helper";
import CityDropdown from "../../../components/shared/components/dropdown";
import { useFormik } from "formik";
import { useProperties } from "../../../hooks/property";

const Banner = () => {
  const navigate = useNavigate();
  let publicUrl = process.env.PUBLIC_URL + "/";
  const { isLoading, handleGetBlogs } = useCities();
  const { handleGetLocation, handleGetLocationId } = useProperties();
  const { cities } = useAppSelector((state) => state.City);
  const { addressData, propertyId } = useAppSelector((state) => state.Properties);

  useEffect(() => {
    handleGetBlogs();

  }, [])

  const citiesOptions = ensureArray(cities?.data)?.map((item) => ({
    label: item?.name,
    value: item?.name,
  }));

  const locationOptions = ensureArray(addressData?.addresses)?.map((item) => ({
    label: item,
    value: item
  }))
 
  const initialValues = {
    city: "",
    location: "",
    price: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        await handleGetLocationId(values);
        navigate(`/product-details/${propertyId}`)
      } catch (error) {
        console.error("Error submitting order:", error);
      }finally{
        resetForm();
      }
    },
  });

  useEffect(() => {
    if(formik?.values?.city){
      handleGetLocation(formik?.values?.city)
    }
  }, [formik?.values?.city])

  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        <video autoPlay muted loop id="myVideo">
          <source
            src={publicUrl + "assets/media/banner-video.mp4"}
            type="video/mp4"
          />
        </video>

        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30"
          data-bs-bg={publicUrl + "assets/img/slider/41.jpg"}
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-car-dealer-form">
                    <div className="section-title-area ltn__section-title-2 text-center">
                      <h1 className="section-title  text-color-white">
                        Find Your{" "}
                        <span className="ltn__secondary-color-3">Perfect</span>{" "}
                        Home
                      </h1>
                    </div>
                    <div className="ltn__car-dealer-form-tab">
                      <div className="tab-content pb-10">
                        <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                          <div className="car-dealer-form-inner">
                            <form style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", alignItems: "center", justifyContent: "center", paddingBottom: "6px",}}
                              onSubmit={formik.handleSubmit}>
                              <div>
                                <CityDropdown
                                  label="City"
                                  value={formik?.values?.city}
                                  onChange={(e) => formik?.setFieldValue("city", e.target.value)}
                                  placeholder="Select City"
                                  options={citiesOptions}
                                  isLoading={isLoading}
                                />
                              </div>
                              <div>
                                <CityDropdown
                                  label="Location"
                                  value={formik?.values?.location}
                                  onChange={(e) => formik?.setFieldValue("location", e.target.value)}
                                  placeholder="Select Location"
                                  options={locationOptions}
                                  isLoading={false}
                                />
                              </div>
                              <div className="input-item input-item-name">
                                <input
                                  type="text"
                                  name="price"
                                  placeholder="Enter Price"
                                  value={formik?.values?.price}
                                  style={{margin: "0px"}}
                                  onChange={(e) => formik?.setFieldValue("price", Number(e?.target?.value))}
                                />
                              </div>
                              <div>
                                <div className="btn-wrapper text-center mt-0 go-top">
                                  <button disabled={!(formik?.values?.city && formik?.values?.location)} type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">
                                    Search
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="ltn__form_tab_1_2">
                          <div className="car-dealer-form-inner">
                            <form
                              action="#"
                              className="ltn__car-dealer-form-box row"
                            >
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Property Type</option>
                                  <option>Apartment</option>
                                  <option>Co-op</option>
                                  <option>Condo</option>
                                  <option>Single Family Home</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Location</option>
                                  <option>chicago</option>
                                  <option>London</option>
                                  <option>Los Angeles</option>
                                  <option>New York</option>
                                  <option>New Jersey</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Sub Location</option>
                                  <option>Bayonne</option>
                                  <option>Greenville</option>
                                  <option>Manhattan</option>
                                  <option>Queens</option>
                                  <option>The Heights</option>
                                  <option>Upper East Side</option>
                                  <option>West Side</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <div className="btn-wrapper text-center mt-0 go-top">
                                  {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                  <Link
                                    to="/shop-right-sidebar"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;