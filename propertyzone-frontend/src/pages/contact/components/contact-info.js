import { Link } from "react-router-dom";

const ContactInfo = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__contact-address-area mb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={publicUrl + "assets/img/icons/10.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Email Address</h3>
              <p>
                aliimrann744@gmail.com<br />
                quarter@sales.com
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={publicUrl + "assets/img/icons/11.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Phone Number</h3>
              <p>
                03211793255<br /> +923084034370
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
              <div className="ltn__contact-address-icon">
                <img
                  src={publicUrl + "assets/img/icons/12.png"}
                  alt="Icon Image"
                />
              </div>
              <h3>Office Address</h3>
              <p>
                Satyana Road, Opposite Chase Value<br />
                Faisalabad, Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;