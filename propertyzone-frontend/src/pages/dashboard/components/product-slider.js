import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProperties } from "../../../hooks/property";
import { useAppSelector } from "../../../hooks/store-hook";
import { ensureArray } from "../../../helper-functions/formater-helper";

const ProductSlider = () => {
  const navigate = useNavigate();
  let publicUrl = process.env.PUBLIC_URL + "/";
  const { handleGetProperties } = useProperties();
  const { propertyData } = useAppSelector((state) => state.Properties);
  const initialParams = {
    page: 1,
    limit: 3,
    search: "",
  };

  useEffect(() => {
    handleGetProperties(initialParams);

  }, [initialParams?.page, initialParams?.limit, initialParams?.search])

  const handleNavigate = (item) => {
    navigate(`/product-details/${item._id}`, { state: { item } });
  };

  return (
    <div>
      <div className="ltn__product-slider-area ltn__product-gutter pt-25 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Properties
                </h6>
                <h1 className="section-title">Latest Listings</h1>
              </div>
            </div>
          </div>

            <div className="row" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {ensureArray(propertyData?.properties)?.map((item, index) => (
                <div key={index} className="ltn__product-item ltn__product-item-4 text-center---">
                  <div className="product-img go-top">
                    <div onClick={() => handleNavigate(item)} style={{ minWidth: "18rem", maxHeight: "12rem" }}>
                      <img src={item?.images[0] ?? "/assets/img/pictures/image-placeholder.jpg"}
                        alt={item?.title ?? ""} style={{width: "100%", height: "auto", objectFit: "cover"}}
                      />
                    </div>
                    <div onClick={() => handleNavigate(item)} className="product-badge" style={{ cursor: "pointer" }}>
                      <ul>
                        <li className="sale-badge bg-green">
                          For {item?.status ?? ""}
                        </li>
                      </ul>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <div onClick={() => handleNavigate(item)} style={{cursor: "pointer"}}>
                              <i className="flaticon-pin" />
                              {item?.address?.address ?? ""}, {item?.address?.city ?? ""}
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-gallery go-top">
                        <ul>
                          <li>
                            <div onClick={() => handleNavigate(item)} style={{cursor: "pointer"}}>
                              <i className="fas fa-camera" />{" "}
                              {item?.images?.length ?? 0}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info pb-4">
                    <div className="product-price">
                      <span>
                        Rs. {item?.price ?? 0}
                        <label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title go-top">
                      <div onClick={() => handleNavigate(item)} style={{cursor: "pointer"}}>{item?.title ?? ""}</div>
                    </h2>
                    <div className="product-description">
                      <p>{item?.description ?? ""}</p>
                    </div>
                    <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          {item?.bedrooms ?? 0} <i className="flaticon-bed" />
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          {item?.bathrooms ?? 0} <i className="flaticon-clean" />
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          {item?.lotArea ?? 0}{" "}
                          <i className="flaticon-square-shape-design-interface-tool-symbol" />
                        </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;