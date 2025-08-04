import { Link, useNavigate } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";
import { useBlogs } from "../../../hooks/blogs";
import { useAppSelector } from "../../../hooks/store-hook";
import { useEffect } from "react";

const BlogSlider = () => {
  const navigate = useNavigate();
  const { handleGetBlogs } = useBlogs();
  const { blogsData } = useAppSelector((state) => state.Blogs);

  useEffect(() => {
    handleGetBlogs();

  }, []);

  const handleNavigate = (item) => {
    navigate(`/blog-details/${item?._id}`, { state: { item } });
  };

  return (
    <div className={"ltn__blog-area pt-115--- pb-70 go-top "}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className={"section-subtitle ltn__secondary-color "}>
                New &amp; Blogs
              </h6>
              <h1 className="section-title">Leatest Blogs</h1>
            </div>
          </div>
        </div>
        <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
          {ensureArray(blogsData?.blogs)?.map((item, index) => (
            <div key={index} className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                    <img src={item?.image ?? ""} alt={item?.title ?? ""} />
                  </div>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <div style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="far fa-user" />
                          by: {item?.creator ?? ""}
                        </div>
                      </li>
                      <li className="ltn__blog-tags">
                        <span style={{marginRight: "6px", cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="fas fa-tags" />
                          {item?.tags[0] ?? ""}
                        </span>
                        <span style={{cursor: "pointer"}} onClick={() => handleNavigate(item)}>
                          <i className="fas fa-tags" />
                          {item?.tags[1] ?? ""}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <div style={{cursor: "pointer"}} onClick={()=> handleNavigate(item)}>{item?.title ?? ""}</div>
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
      </div>
    </div>
  );
};

export default BlogSlider;