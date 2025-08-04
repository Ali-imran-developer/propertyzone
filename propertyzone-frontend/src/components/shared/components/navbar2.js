import { Link, useNavigate } from "react-router-dom";
import Social from "../../section-components/social";
import AuthController from "../../../controllers/authController";

const Navbar2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const navigate = useNavigate();
  const data = AuthController.getSession();

  const handleClick = (e) => {
    e.preventDefault();
    if (data?.user?.name && data?.user?.email) {
      navigate("/add-listing");
    } else {
      const modal = document.getElementById("ltn_add_listing_modal");
      if (modal) {
        modal.classList.add("show");
        modal.style.display = "block";
        modal.removeAttribute("aria-hidden");
        modal.setAttribute("aria-modal", "true");
      }
    }
  };

  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                        <i className="icon-mail" />
                        aliimran744@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="locations.html">
                        <i className="icon-placeholder" />
                        Faisal Heights, FSD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li className="d-none">
                        {/* ltn__language-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li>
                              <a href="#" className="dropdown-toggle">
                                <span className="active-currency">English</span>
                              </a>
                              <ul>
                                <li>
                                  <Link to="#">Arabic</Link>
                                </li>
                                <li>
                                  <Link to="#">Bengali</Link>
                                </li>
                                <li>
                                  <Link to="#">Chinese</Link>
                                </li>
                                <li>
                                  <Link to="#">English</Link>
                                </li>
                                <li>
                                  <Link to="#">French</Link>
                                </li>
                                <li>
                                  <Link to="#">Hindi</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Social />
                      </li>
                      <li>
                        {/* header-top-btn */}
                        <div className="header-top-btn">
                          <a href="#" onClick={handleClick}>
                            Add Listing
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <Link to="/">
                      <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
                    </Link>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4>
                        <a href="tel:+123456789">03211793255</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <ul>
                        <li className="menu-icon">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/about">About</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/shop">Properties</Link>
                        </li>
                        <li className="menu-icon">
                          <Link to="/blog-grid">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icon-user" />
                      </Link>
                      <ul className="go-top">
                        <li>
                          <Link to="/login">Sign in</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/my-account">My Account</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mobile-menu-toggle d-xl-none">
                  <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo.png"} alt="Logo" />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/shop">Properties</Link>
              </li>
              <li>
                <Link to="/blog-grid">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <Link to="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f" /></Link>
              </li>
              <li>
                <Link to="https://x.com" target="_blank"><i className="fab fa-twitter"/></Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin" /></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com" target="_blank"><i className="fab fa-instagram" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ltn__modal-area ltn__add-to-cart-modal-area----">
        <div
          className="modal fade"
          id="ltn_add_listing_modal"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    const modal = document.getElementById("ltn_add_listing_modal");
                    if (modal) {
                      modal.classList.remove("show");
                      modal.style.display = "none";
                      modal.setAttribute("aria-hidden", "true");
                      modal.removeAttribute("aria-modal");
                    }
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-info text-center">
                          <h4>Add Listing</h4>
                          <p className="added-cart">
                            You have to Singup first.
                          </p>

                            <div className="btn-wrapper mt-0">
                              <button
                                className="theme-btn-1 btn btn-full-width-2"
                                type="submit"
                                onClick={() => navigate("/register")}
                              >
                                Sing Up
                              </button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;