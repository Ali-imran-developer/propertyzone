import { Link, useLocation } from "react-router-dom";
import Comments from "./comments";
import Navbar from "../../../components/shared/components/navbar2";
import PageHeader from "../../../components/shared/components/page-header";
import Sidebar from "./sidebar";
import CallToAction from "../../../components/shared/components/call-to-action";
import Footer from "../../../components/shared/components/footer";
import { blogData } from "../../../data/blogsData";
import { ensureArray } from "../../../helper-functions/formater-helper";

const BlogDetails = () => {
  const location = useLocation();
  const data = location?.state?.item;
  // const data = blogData[0];
  // console.log("data", data);

  return (
    <>
      <Navbar />
      <PageHeader headertitle="Blogs Detail" />
      <div className="ltn__page-details-area ltn__blog-details-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__blog-details-wrap">
                <div className="ltn__page-details-inner ltn__blog-details-inner">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-category">
                        <Link to="/shop">Real Estate</Link>
                      </li>
                    </ul>
                  </div>
                  <h2 className="ltn__blog-title">{data?.title ?? ""}</h2>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author go-top">
                        <Link to="/team-details">
                          By: {data?.creator ?? ""}
                        </Link>
                      </li>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt" />
                        {data?.createdAt ?? ""}
                      </li>
                    </ul>
                  </div>
                  <p>{data?.para1 ?? ""}</p>
                  <p>{data?.para2 ?? ""}</p>
                  <img src={data?.image ?? ""} alt="Image" />
                  {ensureArray(data?.detail)?.map((item, index) => (
                    <div key={index}>
                      <h2>{item?.title ?? ""}</h2>
                      <p>{item?.para ?? ""}</p>
                    </div>
                  ))}
                </div>
                <Comments />
              </div>
            </div>
            <Sidebar data={data?.title} />
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default BlogDetails;