import { Link } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";
import { topCategories } from "../../../data/topCategories";

const TopCategories = () => {
  return (
    <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Top Categories
      </h4>
      <ul className="go-top">
        <li>
          {ensureArray(topCategories)?.map((item, index) => (
            <Link key={index} to="/blog-grid" style={{ marginBottom: "10px" }}>
              {item?.name ?? ""} <span>({item?.total ?? 0})</span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default TopCategories;