import { Link } from "react-router-dom";
import Sidebar from "./properties-sidebar";
import { useProperties } from "../../../hooks/property";
import { useAppSelector } from "../../../hooks/store-hook";
import { useEffect, useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Pagination from "../../../components/shared/components/pagination";
import { ensureArray } from "../../../helper-functions/formater-helper";
import { useDebounce } from "../../../helper-functions/useDebounce";
import { useQueryParams } from "../../../helper-functions/useQueryParams";
import { Loader } from "../../../components/shared/components/loader";

const ShopGrid = () => {
  const { handleGetProperties, Loading } = useProperties();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const { updateParams, params } = useQueryParams();
  const page = Number(params.get("page")) || 1;
  const limit = Number(params.get("limit")) || 12;
  const [currentPage, setCurrentPage] = useState(page);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const { propertyData } = useAppSelector((state) => state.Properties);
  const initialParams = {
    page: currentPage,
    limit: currentLimit,
    search: debouncedSearch,
  };

  useEffect(() => {
    handleGetProperties(initialParams);
    updateParams({ page: currentPage, limit: currentLimit });

  }, [initialParams?.page, initialParams?.limit, initialParams?.search]);

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-100">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="ltn__search-widget mb-30">
                          <form action="#">
                            <input
                              type="text"
                              name="search"
                              value={search}
                              prefix={
                                <PiMagnifyingGlassBold className="size-4" />
                              }
                              placeholder="Search Properties..."
                              onChange={(e) => setSearch(e?.target?.value)}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                    {Loading ? (
                      <Loader />
                    ) : (  
                      <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", }}>
                        {ensureArray(propertyData?.properties)?.map((item, index) => (
                            <div key={index} className="ltn__product-item ltn__product-item-4 text-center---">
                              <div className="product-img go-top">
                                <Link to={`/product-details/${item?._id}`} style={{ minWidth: "18rem", maxHeight: "12rem" }}>
                                  <img
                                    src={ item?.images[0] ?? "/assets/img/pictures/image-placeholder.jpg"}
                                    alt={item?.title ?? ""} style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                  />
                                </Link>
                                <div className="product-badge">
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
                                        <Link to={`/product-details/${item?._id}`}>
                                          <i className="flaticon-pin" />
                                          {item?.address?.address ?? ""},{" "}
                                          {item?.address?.city ?? ""}
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="product-img-gallery go-top">
                                    <ul>
                                      <li>
                                        <Link to={`/product-details/${item?._id}`}>
                                          <i className="fas fa-camera" />{" "}
                                          {item?.images?.length ?? 0}
                                        </Link>
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
                                  <Link to={`/product-details/${item?._id}`}>
                                    {item?.title ?? ""}
                                  </Link>
                                </h2>
                                <div className="product-description">
                                  <p>{item?.description ?? ""}</p>
                                </div>
                                <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                  <li>
                                    <span>
                                      {item?.bedrooms ?? 0}{" "}
                                      <i className="flaticon-bed" />
                                    </span>
                                    Bedrooms
                                  </li>
                                  <li>
                                    <span>
                                      {item?.bathrooms ?? 0}{" "}
                                      <i className="flaticon-clean" />
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
                          )
                        )}
                      </div>
                    )}  
                    </div>
                  </div>
                </div>
              </div>
              <Pagination
                length={propertyData?.totalProperties}
                currentLimit={currentLimit}
                currentPage={currentPage}
                setCurrentLimit={setCurrentLimit}
                setCurrentPage={setCurrentPage}
              />
            </div>
            {/* <Sidebar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;