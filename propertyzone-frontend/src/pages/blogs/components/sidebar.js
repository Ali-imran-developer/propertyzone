import Booking from "../../../components/shared/components/booking";
import Tags from "../../../components/shared/components/tags";
import TopProducts from "../../../components/shared/components/top-products";
import SocialIcon from "../../../components/shared/components/social-icons";
import TopCategories from "../../../components/shared/components/top-categories";

const Sidebar = ({ data }) => {
  return (
    <div className="col-lg-4 go-top">
      <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
        {/* <Booking propertyName={data} /> */}
        <TopProducts />
        <TopCategories />
        <SocialIcon />
        <Tags />
      </aside>
    </div>
  );
};

export default Sidebar;