import { Link } from "react-router-dom";

const tags = () => {
  return (
    <div className="widget ltn__tagcloud-widget go-top">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Popular Tags
      </h4>
      <ul>
        <li>
          <Link to="/blog-grid">House</Link>
        </li>
        <li>
          <Link to="/blog-grid">Apartment</Link>
        </li>
        <li>
          <Link to="/blog-grid">Rental</Link>
        </li>
        <li>
          <Link to="/blog-grid">Sell Property</Link>
        </li>
        <li>
          <Link to="/blog-grid">Buy Property</Link>
        </li>
        <li>
          <Link to="/blog-grid">Investment</Link>
        </li>
        <li>
          <Link to="/blog-grid">Location</Link>
        </li>
        <li>
          <Link to="/blog-grid">Interior</Link>
        </li>
        <li>
          <Link to="/blog-grid">Real Estate</Link>
        </li>
      </ul>
    </div>
  );
};

export default tags;