const SocialIcon = () => {
  return (
    <div className="widget ltn__social-media-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border-2">
        Follow us
      </h4>
      <div className="ltn__social-media-2">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" title="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" title="Twitter">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" title="Linkedin">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" title="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialIcon;