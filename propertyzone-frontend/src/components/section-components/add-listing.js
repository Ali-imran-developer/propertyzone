import { useProperties } from "../../hooks/property";
import { useFormik } from "formik";
import { convertToBase64 } from "../../helper-functions/base64";

const AddListing = () => {
  const { handleCreateProperties, Loading } = useProperties();

  const initialValues = {
    images: [],
    title: "", // done
    description: "", // done
    bedrooms: null, // done
    bathrooms: null, // done
    rooms: null, // done
    homeArea: null, // done
    builted: null, // done
    lotArea: null, // done
    lotDimensions: null, // done
    price: null, // done
    floor: null, // done
    note: "", // done
    status: "", // done
    address: {
      // done
      address: "", // done
      country: "", // done
      city: "", // done
      zip: null, // done
    },
    area: {
      livingRoom: null, // done
      garage: null, // done
      dining: null, // done
      bedroom: null, // done
      bathroom: null, // done
      gym: null, // done
      garden: null, // done
      parking: null, // done
    },
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("values", values);
        handleCreateProperties(values);
      } catch (error) {
        console.error("Error submitting order:", error);
      } finally{
        resetForm();
      }
    },
  });

  const handleImageChange = async (event) => {
    const files = event.target.files;
    const base64Images = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!["image/jpeg", "image/png"].includes(file.type)) continue;
      const base64 = await convertToBase64(file);
      base64Images.push(base64);
    }
    formik.setFieldValue("images", base64Images);
  };

  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__appointment-inner">
              <form onSubmit={formik?.handleSubmit}>
                <h2>1. Description</h2>
                <h6>Property Description *</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="title"
                        placeholder="Title *"
                        value={formik?.values?.title}
                        onChange={(e) =>
                          formik.setFieldValue("title", e.target.value)
                        }
                      />
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        placeholder="Description"
                        value={formik?.values?.description}
                        onChange={(e) =>
                          formik.setFieldValue("description", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Price *"
                        value={formik.values.price}
                        onChange={(e) =>
                          formik.setFieldValue("price", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item">
                      <select
                        className="nice-select"
                        value={formik?.values?.status}
                        onChange={(e) =>
                          formik.setFieldValue("status", e.target.value)
                        }
                      >
                        <option value="">Select Status</option>
                        <option value="rentals">Rentals</option>
                        <option value="sales">Sales</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2>2. Media</h2>
                <h6>Listing Media</h6>

                {/* <ProductImageUpload formik={formik} /> */}
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  accept="image/jpeg, image/png"
                  multiple
                  onChange={handleImageChange}
                  className="btn theme-btn-3 mb-10"
                />
                <br />
                <p>
                  <small>
                    * At least 1 image is required for a valid
                    submission.Minimum size is 500/500px.
                  </small>
                  <br />
                  <small>* PDF files upload supported as well.</small>
                  <br />
                  <small>* Images might take longer to be processed.</small>
                </p>
                <h2>3. Location</h2>
                <h6>Listing Location *</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        placeholder="Address *"
                        value={formik?.values?.address?.address}
                        onChange={(e) =>
                          formik?.setFieldValue(
                            "address.address",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        placeholder="Country *"
                        value={formik?.values?.address?.country}
                        onChange={(e) =>
                          formik?.setFieldValue(
                            "address.country",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        placeholder="City *"
                        value={formik?.values?.address?.city}
                        onChange={(e) =>
                          formik?.setFieldValue("address.city", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Zip *"
                        value={formik?.values?.address?.zip}
                        onChange={(e) =>
                          formik?.setFieldValue("address.zip", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <h2>4. Details</h2>
                <h6>Listing Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Total Bedrooms"
                        value={formik?.values?.bedrooms}
                        onChange={(e) =>
                          formik?.setFieldValue("bedrooms", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Total Rooms"
                        value={formik?.values?.rooms}
                        onChange={(e) =>
                          formik?.setFieldValue("rooms", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Total Bathrooms"
                        value={formik?.values?.bathrooms}
                        onChange={(e) =>
                          formik?.setFieldValue("bathrooms", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Total Floors"
                        value={formik?.values?.floor}
                        onChange={(e) =>
                          formik?.setFieldValue("floor", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        placeholder="Notes"
                        value={formik?.values?.note}
                        onChange={(e) =>
                          formik?.setFieldValue("note", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <h6>Area Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="Year Built *"
                        value={formik?.values?.builted}
                        onChange={(e) =>
                          formik?.setFieldValue("builted", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="HomeArea in ft *"
                        value={formik?.values?.homeArea}
                        onChange={(e) =>
                          formik?.setFieldValue("homeArea", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="lotArea in ft *"
                        value={formik?.values?.lotArea}
                        onChange={(e) =>
                          formik?.setFieldValue("lotArea", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="lotDimensions in ft"
                        value={formik?.values?.lotDimensions}
                        onChange={(e) =>
                          formik?.setFieldValue("lotDimensions", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="livingRoom in ft"
                        value={formik?.values?.area?.livingRoom}
                        onChange={(e) =>
                          formik?.setFieldValue(
                            "area.livingRoom",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="GarageArea in ft"
                        value={formik?.values?.area?.garage}
                        onChange={(e) =>
                          formik?.setFieldValue("area.garage", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="DiningArea in ft"
                        value={formik?.values?.area?.dining}
                        onChange={(e) =>
                          formik?.setFieldValue("area.dining", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="BedroomArea in ft"
                        value={formik?.values?.area?.bedroom}
                        onChange={(e) =>
                          formik?.setFieldValue("area.bedroom", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="BathroomArea in ft"
                        value={formik?.values?.area?.bathroom}
                        onChange={(e) =>
                          formik?.setFieldValue("area.bathroom", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="GymArea in ft"
                        value={formik?.values?.area?.gym}
                        onChange={(e) =>
                          formik?.setFieldValue("area.gym", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="GardenArea in ft"
                        value={formik?.values?.area?.garden}
                        onChange={(e) =>
                          formik?.setFieldValue("area.garden", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="number"
                        placeholder="parkingArea in ft"
                        value={formik?.values?.area?.parking}
                        onChange={(e) =>
                          formik?.setFieldValue("area.parking", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="alert alert-warning d-none" role="alert">
                  Please note that the date and time you requested may not be
                  available. We will contact you to confirm your actual
                  appointment details.
                </div>
                <div className="btn-wrapper text-center mt-30">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                    disabled={Loading}
                  >
                    {Loading ? "Loading..." : "Submit Property"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;