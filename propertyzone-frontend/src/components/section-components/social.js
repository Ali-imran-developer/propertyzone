import { Link } from "react-router-dom";

const Social = () => {

  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <Link to="https://www.facebook.com" title="Facebook">
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li>
          <Link to="https://www.twitter.com" title="Twitter">
            <i className="fab fa-twitter" />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com" title="Instagram">
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li>
          <Link to="https://www.dribble.com" title="Dribbble">
            <i className="fab fa-dribbble" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;