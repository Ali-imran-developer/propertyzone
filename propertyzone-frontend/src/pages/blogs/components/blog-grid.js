import { useNavigate } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";
import Pagination from "../../../components/shared/components/pagination";
import { useQueryParams } from "../../../helper-functions/useQueryParams";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/store-hook";
import { useBlogs } from "../../../hooks/blogs";

const BlogGrid = () => {
  const navigate = useNavigate();
  const { params } = useQueryParams();
  const page = Number(params.get("page")) || 1;
  const limit = Number(params.get("limit")) || 12;
  const [currentPage, setCurrentPage] = useState(page);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const { handleGetBlogs } = useBlogs();
  const { blogsData } = useAppSelector((state) => state.Blogs);
  
  useEffect(() => {
    handleGetBlogs()
  
  }, [])

  const handleNavigate = (item) => {
    navigate(`/blog-details/${item?._id}`, { state: { item } });
  };

  return (
    <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
      <div className="container">
        <div className="row">
          {ensureArray(blogsData?.blogs)?.map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                    <img src={item?.image ?? ""} alt={item?.title ?? ""} />
                  </div>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <li className="ltn__blog-author go-top">
                        <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="far fa-user" />
                          by: {item?.creator ?? ""}
                        </div>
                      </li>
                      <li className="ltn__blog-tags" style={{display: "flex", gap: "12px", alignItems: "center", justifyContent: "center"}}>
                        <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="fas fa-tags" />
                          {item?.tags[0] ?? ""}
                        </div>
                        <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="fas fa-tags" />
                          {item?.tags[1] ?? ""}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>{item?.title ?? ""}</div>
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
                      <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>Read more</div>
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