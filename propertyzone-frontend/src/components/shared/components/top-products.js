import { Link } from "react-router-dom";
import { ensureArray, formatPrice } from "../../../helper-functions/formater-helper";
import { useAppSelector } from "../../../hooks/store-hook";
import { useProperties } from "../../../hooks/property";
import { useEffect } from "react";

const TopProducts = () => {
  const { propertyData } = useAppSelector((state) => state.Properties);
  const { handleGetProperties } = useProperties();
  const initialParams = { page: 1, limit: 5, search: "" };

  useEffect(() => {
    handleGetProperties(initialParams);

  }, []);

  return (
    <div className="widget ltn__top-rated-product-widget go-top">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Top Rated Product
      </h4>
      <ul>
        <li>
          {ensureArray(propertyData?.properties)?.map((item, index) => (
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
          ))}
        </li>
      </ul>
    </div>
  );
};

export default TopProducts;
