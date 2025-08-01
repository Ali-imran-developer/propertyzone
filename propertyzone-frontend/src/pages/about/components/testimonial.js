import { clientsData } from "../../../data/clientsData";
import { ensureArray } from "../../../helper-functions/formater-helper";

const Testimonial = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-45 pb-20" data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Our Testimonial
              </h6>
              <h1 className="section-title">Clients Feedback</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
          {ensureArray(clientsData)?.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    {item?.comment ?? ""}
                  </p>
                  <div className="ltn__testimoni-info-inner">
					<div className="ltn__testimoni-img" style={{ width: "40px", height: "40px", overflow: "hidden", borderRadius: "50%" }}>
					<img
						alt={item?.clientName ?? ""}
						src={item?.image ?? "assets/img/testimonial/1.jpg"}
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
					</div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>{item?.clientName ?? ""}</h5>
                      <label>{item?.type ?? ""}</label>
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

export default Testimonial;