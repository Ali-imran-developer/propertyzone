import { Link } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";
import { blogData } from "../../../data/blogsData";

const BlogSlider = () => {

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
          {ensureArray(blogData)?.map((item, index) => (
            <div key={index} className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details">
                    <img src={item?.image ?? ""} alt={item?.title ?? ""} />
                  </Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
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
      </div>
    </div>
  );
};

export default BlogSlider;