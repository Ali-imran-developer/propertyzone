import { Link } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";

const ShopDetails = ({ data }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__shop-details-area pb-10" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-category">
                    <Link to="#">Featured</Link>
                  </li>
                  <li className="ltn__blog-category">
                    <Link className="bg-orange" to="#">
                      For {data?.status ?? ""}
                    </Link>
                  </li>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt" />
                    {data?.createdAt ?? ""}
                  </li>
                </ul>
              </div>
              <h1>{data?.title ?? ""}</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                {data?.address?.address ?? ""}, {data?.address?.city ?? ""}
              </label>
              <h4 className="title-2">Description</h4>
              <p>{data?.description ?? ""}</p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                  <li>
                    <label>Property ID:</label>{" "}
                    <span>{data?.propertyId ?? ""}</span>
                  </li>
                  <li>
                    <label>Home Area: </label>{" "}
                    <span>{data?.homeArea ?? 0} sqft</span>
                  </li>
                  <li>
                    <label>Rooms:</label> <span>{data?.rooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>{data?.bathrooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Year built:</label>{" "}
                    <span>{data?.builted ?? ""}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>Lot Area:</label> <span>{data?.lotArea ?? ""}</span>
                  </li>
                  <li>
                    <label>Lot dimensions:</label>{" "}
                    <span>{data?.lotDimensions ?? 0} sqft</span>
                  </li>
                  <li>
                    <label>Beds:</label> <span>{data?.bedrooms ?? 0}</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>Rs. {data?.price ?? 0}</span>
                  </li>
                  <li>
                    <label>Property Status:</label>{" "}
                    <span>For {data?.status ?? ""}</span>
                  </li>
                </ul>
              </div>
              {data?.area?.livingRoom &&
              data?.area?.garage &&
              data?.area?.dining !== null ? (
                <>
                  <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Living Room</h6>
                            <small>{data?.area?.livingRoom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Garage</h6>
                            <small>{data?.area?.garage ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Dining Area</h6>
                            <small>{data?.area?.dining ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Bedroom</h6>
                            <small>{data?.area?.bedroom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Bathroom</h6>
                            <small>{data?.area?.bathroom ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Gym Area</h6>
                            <small>{data?.area?.gym ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Garden</h6>
                            <small>{data?.area?.garden ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed" />
                          <div>
                            <h6>Parking</h6>
                            <small>{data?.area?.parking ?? 0} sq feet</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
              <h4 className="title-2">From Our Gallery</h4>
              <div className="ltn__property-details-gallery mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href={publicUrl + "assets/img/others/14.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={data?.images[0] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                    <a
                      href={publicUrl + "assets/img/others/15.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={data?.images[1] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={publicUrl + "assets/img/others/16.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={data?.images[2] ?? ""}
                        alt="Image"
                        style={{
                          width: "350px",
                          height: "390px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                <h4 className="title-2">Customer Reviews</h4>
                <div className="product-ratting">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star-half-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-star" />
                      </a>
                    </li>
                    <li className="review-total">
                      {" "}
                      <a href="#"> ( 95 Reviews )</a>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* comment-area */}
                <div className="ltn__comment-area mb-30">
                  <div className="ltn__comment-inner">
                    <ul>
                      <li>
                        <div className="ltn__comment-item clearfix">
                          <div className="ltn__commenter-img">
                            <img
                              src={publicUrl + "assets/img/testimonial/1.jpg"}
                              alt="Image"
                            />
                          </div>
                          <div className="ltn__commenter-comment">
                            <h6>
                              <a href="#">Adam Smit</a>
                            </h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Doloribus, omnis fugit corporis
                              iste magnam ratione.
                            </p>
                            <span className="ltn__comment-reply-btn">
                              September 3, 2020
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ltn__comment-item clearfix">
                          <div className="ltn__commenter-img">
                            <img
                              src={publicUrl + "assets/img/testimonial/3.jpg"}
                              alt="Image"
                            />
                          </div>
                          <div className="ltn__commenter-comment">
                            <h6>
                              <a href="#">Adam Smit</a>
                            </h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Doloribus, omnis fugit corporis
                              iste magnam ratione.
                            </p>
                            <span className="ltn__comment-reply-btn">
                              September 2, 2020
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="ltn__comment-item clearfix">
                          <div className="ltn__commenter-img">
                            <img
                              src={publicUrl + "assets/img/testimonial/2.jpg"}
                              alt="Image"
                            />
                          </div>
                          <div className="ltn__commenter-comment">
                            <h6>
                              <a href="#">Adam Smit</a>
                            </h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Doloribus, omnis fugit corporis
                              iste magnam ratione.
                            </p>
                            <span className="ltn__comment-reply-btn">
                              September 2, 2020
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* comment-reply */}
                <div className="ltn__comment-reply-area ltn__form-box mb-30">
                  <form action="#">
                    <h4>Add a Review</h4>
                    <div className="mb-30">
                      <div className="add-a-review">
                        <h6>Your Ratings:</h6>
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        placeholder="Type your comments...."
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" placeholder="Type your name...." />
                    </div>
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input type="email" placeholder="Type your email...." />
                    </div>
                    <div className="input-item input-item-website ltn__custom-icon">
                      <input
                        type="text"
                        name="website"
                        placeholder="Type your website...."
                      />
                    </div>
                    <label className="mb-0">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <h4 className="title-2">Related Properties</h4>
              <div className="row">
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12 go-top">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/shop">
                        <img
                          src={publicUrl + "assets/img/product-3/1.jpg"}
                          alt="#"
                        />
                      </Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details">
                            <img
                              src={publicUrl + "assets/img/blog/author.jpg"}
                              alt="#"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title">
                        <Link to="/shop">New Apartment Nice View</Link>
                      </h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/shop">
                              <i className="flaticon-pin" /> Belmont Gardens,
                              Chicago
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li>
                          <span>3 </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>2 </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>3450 </span>
                          square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <a
                              href="#"
                              title="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_modal"
                            >
                              <i className="flaticon-expand" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="Wishlist"
                              data-bs-toggle="modal"
                              data-bs-target="#liton_wishlist_modal"
                            >
                              <i className="flaticon-heart-1" />
                            </a>
                          </li>
                          <li>
                            <Link to="/shop" title="Compare">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>
                          $349,00<label>/Month</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12 go-top">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/shop">
                        <img
                          src={publicUrl + "assets/img/product-3/2.jpg"}
                          alt="#"
                        />
                      </Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details">
                            <img
                              src={publicUrl + "assets/img/blog/author.jpg"}
                              alt="#"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Sale</li>
                        </ul>
                      </div>
                      <h2 className="product-title">
                        <Link to="/shop">New Apartment Nice View</Link>
                      </h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/shop">
                              <i className="flaticon-pin" /> Belmont Gardens,
                              Chicago
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li>
                          <span>3 </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>2 </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>3450 </span>
                          square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <a
                              href="#"
                              title="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#quick_view_modal"
                            >
                              <i className="flaticon-expand" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="Wishlist"
                              data-bs-toggle="modal"
                              data-bs-target="#liton_wishlist_modal"
                            >
                              <i className="flaticon-heart-1" />
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details.html" title="Compare">
                              <i className="flaticon-add" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>
                          $349,00<label>/Month</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
              {/* Author Widget */}
              <div className="widget ltn__author-widget">
                <div className="ltn__author-widget-inner text-center">
                  <img src={publicUrl + "assets/img/team/4.jpg"} alt="Image" />
                  <h5>Rosalina D. Willaimson</h5>
                  <small>Traveller/Photographer</small>
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star" />
                        </a>
                      </li>
                      <li className="review-total">
                        {" "}
                        <a href="#"> ( 1 Reviews )</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis distinctio, odio, eligendi suscipit reprehenderit
                    atque.
                  </p>
                  <div className="ltn__social-media">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Search Widget */}
              <div className="widget ltn__search-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Search Objects
                </h4>
                <form action="#">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search your keyword..."
                  />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              {/* Form Widget */}
              <div className="widget ltn__form-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Drop Messege For Book
                </h4>
                <form action="#">
                  <input type="text" name="yourname" placeholder="Your Name*" />
                  <input
                    type="text"
                    name="youremail"
                    placeholder="Your e-Mail*"
                  />
                  <textarea
                    name="yourmessage"
                    placeholder="Write Message..."
                    defaultValue={""}
                  />
                  <button type="submit" className="btn theme-btn-1">
                    Send Messege
                  </button>
                </form>
              </div>
              {/* Top Rated Product Widget */}
              <div className="widget ltn__top-rated-product-widget go-top">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Top Rated Product
                </h4>
                <ul>
                  <li>
                    <div className="top-rated-product-item clearfix">
                      <div className="top-rated-product-img">
                        <Link to="/product-details">
                          <img
                            src={publicUrl + "assets/img/product/1.png"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="top-rated-product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <Link to="/shop">Luxury House In Greenville </Link>
                        </h6>
                        <div className="product-price">
                          <span>$30,000.00</span>
                          <del>$35,000.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="top-rated-product-item clearfix">
                      <div className="top-rated-product-img">
                        <Link to="/product-details">
                          <img
                            src={publicUrl + "assets/img/product/2.png"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="top-rated-product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <Link to="/shop">Apartment with Subunits</Link>
                        </h6>
                        <div className="product-price">
                          <span>$30,000.00</span>
                          <del>$35,000.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="top-rated-product-item clearfix">
                      <div className="top-rated-product-img">
                        <Link to="/product-details">
                          <img
                            src={publicUrl + "assets/img/product/3.png"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="top-rated-product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h6>
                          <Link to="/shop">3 Rooms Manhattan</Link>
                        </h6>
                        <div className="product-price">
                          <span>$30,000.00</span>
                          <del>$35,000.00</del>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Menu Widget (Category) */}
              <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Top Categories
                </h4>
                <ul className="go-top">
                  <li>
                    <Link to="/blog-grid">
                      Apartments <span>(26)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">
                      Picture Stodio <span>(30)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">
                      Office <span>(71)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">
                      Luxary Vilas <span>(56)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">
                      Duplex House <span>(60)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Popular Product Widget */}
              <div className="widget ltn__popular-product-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Popular Properties
                </h4>
                <div className="row ltn__popular-product-widget-active slick-arrow-1">
                  {/* ltn__product-item */}
                  <div className="col-12">
                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                      <div className="product-img go-top">
                        <Link to="/shop">
                          <img
                            src={publicUrl + "assets/img/product-3/6.jpg"}
                            alt="#"
                          />
                        </Link>
                        <div className="real-estate-agent">
                          <div className="agent-img">
                            <Link to="/team-details">
                              <img
                                src={publicUrl + "assets/img/blog/author.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-price">
                          <span>
                            $349,00<label>/Month</label>
                          </span>
                        </div>
                        <h2 className="product-title">
                          <Link to="/shop">New Apartment Nice View</Link>
                        </h2>
                        <div className="product-img-location">
                          <ul>
                            <li>
                              <Link to="/shop">
                                <i className="flaticon-pin" /> Belmont Gardens,
                                Chicago
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                          <li>
                            <span>3 </span>
                            Bedrooms
                          </li>
                          <li>
                            <span>2 </span>
                            Bathrooms
                          </li>
                          <li>
                            <span>3450 </span>
                            square Ft
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* ltn__product-item */}
                  <div className="col-12">
                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                      <div className="product-img">
                        <a href="product-details.html">
                          <img
                            src={publicUrl + "assets/img/product-3/4.jpg"}
                            alt="#"
                          />
                        </a>
                        <div className="real-estate-agent">
                          <div className="agent-img">
                            <Link to="/team-details">
                              <img
                                src={publicUrl + "assets/img/blog/author.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-price">
                          <span>
                            $349,00<label>/Month</label>
                          </span>
                        </div>
                        <h2 className="product-title">
                          <a href="product-details.html">
                            New Apartment Nice View
                          </a>
                        </h2>
                        <div className="product-img-location">
                          <ul>
                            <li>
                              <a href="product-details.html">
                                <i className="flaticon-pin" /> Belmont Gardens,
                                Chicago
                              </a>
                            </li>
                          </ul>
                        </div>
                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                          <li>
                            <span>3 </span>
                            Bedrooms
                          </li>
                          <li>
                            <span>2 </span>
                            Bathrooms
                          </li>
                          <li>
                            <span>3450 </span>
                            square Ft
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* ltn__product-item */}
                  <div className="col-12">
                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                      <div className="product-img">
                        <a href="product-details.html">
                          <img
                            src={publicUrl + "assets/img/product-3/5.jpg"}
                            alt="#"
                          />
                        </a>
                        <div className="real-estate-agent">
                          <div className="agent-img">
                            <Link to="/team-details">
                              <img
                                src={publicUrl + "assets/img/blog/author.jpg"}
                                alt="#"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-price">
                          <span>
                            $349,00<label>/Month</label>
                          </span>
                        </div>
                        <h2 className="product-title">
                          <a href="product-details.html">
                            New Apartment Nice View
                          </a>
                        </h2>
                        <div className="product-img-location">
                          <ul>
                            <li>
                              <a href="product-details.html">
                                <i className="flaticon-pin" /> Belmont Gardens,
                                Chicago
                              </a>
                            </li>
                          </ul>
                        </div>
                        <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                          <li>
                            <span>3 </span>
                            Bedrooms
                          </li>
                          <li>
                            <span>2 </span>
                            Bathrooms
                          </li>
                          <li>
                            <span>3450 </span>
                            square Ft
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
              {/* Popular Post Widget */}
              <div className="widget ltn__popular-post-widget go-top">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Leatest Blogs
                </h4>
                <ul>
                  <li>
                    <div className="popular-post-widget-item clearfix">
                      <div className="popular-post-widget-img">
                        <Link to="/blog-details">
                          <img
                            src={publicUrl + "assets/img/team/5.jpg"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="popular-post-widget-brief">
                        <h6>
                          <Link to="/blog-details">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-date">
                              <a href="#">
                                <i className="far fa-calendar-alt" />
                                June 22, 2020
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="popular-post-widget-item clearfix">
                      <div className="popular-post-widget-img">
                        <Link to="/blog-details">
                          <img
                            src={publicUrl + "assets/img/team/6.jpg"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="popular-post-widget-brief">
                        <h6>
                          <Link to="/blog-details">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-date">
                              <a href="#">
                                <i className="far fa-calendar-alt" />
                                June 22, 2020
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="popular-post-widget-item clearfix">
                      <div className="popular-post-widget-img">
                        <Link to="/blog-details">
                          <img
                            src={publicUrl + "assets/img/team/7.jpg"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="popular-post-widget-brief">
                        <h6>
                          <Link to="/blog-details">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-date">
                              <a href="#">
                                <i className="far fa-calendar-alt" />
                                June 22, 2020
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="popular-post-widget-item clearfix">
                      <div className="popular-post-widget-img">
                        <Link to="/blog-details">
                          <img
                            src={publicUrl + "assets/img/team/8.jpg"}
                            alt="#"
                          />
                        </Link>
                      </div>
                      <div className="popular-post-widget-brief">
                        <h6>
                          <Link to="/blog-details">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-date">
                              <a href="#">
                                <i className="far fa-calendar-alt" />
                                June 22, 2020
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Social Media Widget */}
              <div className="widget ltn__social-media-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Follow us
                </h4>
                <div className="ltn__social-media-2">
                  <ul>
                    <li>
                      <a href="#" title="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Linkedin">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tagcloud Widget */}
              <div className="widget ltn__tagcloud-widget go-top">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Popular Tags
                </h4>
                <ul>
                  <li>
                    <Link to="/blog-grid">Popular</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">desgin</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">ux</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">usability</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">develop</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">icon</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Car</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Service</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Repairs</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Auto Parts</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Oil</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Dealer</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Oil Change</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Body Color</Link>
                  </li>
                </ul>
              </div>
              {/* Banner Widget */}
              <div className="widget ltn__banner-widget d-none go-top">
                <Link to="/shop">
                  <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
