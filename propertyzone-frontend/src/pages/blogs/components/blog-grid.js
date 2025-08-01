import { Link } from "react-router-dom";
import { blogData } from "../../../data/blogsData";
import { ensureArray } from "../../../helper-functions/formater-helper";
import Pagination from "../../../components/shared/components/pagination";
import { useQueryParams } from "../../../helper-functions/useQueryParams";
import { useState } from "react";

const BlogGrid = () => {
  const { params } = useQueryParams();
  const page = Number(params.get("page")) || 1;
  const limit = Number(params.get("limit")) || 12;
  const [currentPage, setCurrentPage] = useState(page);
  const [currentLimit, setCurrentLimit] = useState(limit);

  return (
    <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
      <div className="container">
        <div className="row">
          {ensureArray(blogData)?.map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details">
                    <img src={item?.image ?? ""} alt={item?.title ?? ""} />
                  </Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author go-top">
                        <Link to="/team-details">
                          <i className="far fa-user" />
                          by: {item?.creator ?? ""}
                        </Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/blog-grid">
                          <i className="fas fa-tags" />
                          {item?.tags[0] ?? ""}
                        </Link>
                        <Link to="/blog-grid">
                          <i className="fas fa-tags" />
                          {item?.tags[1] ?? ""}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <Link to="/blog-details">{item?.title ?? ""}</Link>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt" />
                          {item?.createdAt ?? ""}
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Pagination
              length={6}
              currentLimit={currentLimit}
              currentPage={currentPage}
              setCurrentLimit={setCurrentLimit}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;