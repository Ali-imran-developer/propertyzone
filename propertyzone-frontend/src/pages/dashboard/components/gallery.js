import { Link } from "react-router-dom";

const galleryItems = [
//   {
//     img: "/assets/img/gallery/gallery1.jpg",
//     title: "Manhattan",
//     subtitle: "Heart of NYC",
//     href: "/assets/img/gallery/gallery1.jpg",
//   },
  {
    img: "/assets/img/gallery/gallery2.jpg",
    title: "Upper East Side",
    subtitle: "The luxury crib",
    href: "/assets/img/gallery/gallery2.jpg",
  },
  {
    img: "/assets/img/gallery/gallery3.jpg",
    title: "Jersey City",
    subtitle: "The Best City",
    href: "/assets/img/gallery/gallery3.jpg",
  },
  {
    img: "/assets/img/gallery/gallery4.jpg",
    title: "Queens",
    subtitle: "Friendly neighborhood",
    href: "/assets/img/gallery/gallery4.jpg",
  },
  {
    img: "/assets/img/gallery/gallery5.jpg",
    title: "Greenville",
    subtitle: "The perfect city",
    href: "/assets/img/gallery/gallery5.jpg",
  },
  {
    img: "/assets/img/gallery/gallery5.jpg",
    title: "Greenville",
    subtitle: "The perfect city",
    href: "/assets/img/gallery/gallery5.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="ltn__img-slider-area">
      <div className="container-fluid">
        <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {galleryItems.map((item, index) => (
            <div className="col-lg-12" key={index}>
              <div className="ltn__img-slide-item-4">
                <a
                  href={item.href}
                  data-rel="lightcase:myCollection"
                  style={index === 0 ? { width: "400px", height: "100%" } : {}}
                >
                  <img
                    src={item.img}
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="ltn__img-slide-info">
                  <div className="ltn__img-slide-info-brief gp-top">
                    <h6>{item.subtitle}</h6>
                    <h1>
                      <Link to="/portfolio-details">{item.title}</Link>
                    </h1>
                  </div>
                  <div className="btn-wrapper go-top">
                    <Link
                      to="/portfolio-details"
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    >
                      Details
                    </Link>
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

export default Gallery;