import { Link } from "react-router-dom";
import { ensureArray } from "../../../helper-functions/formater-helper";

const faqs = [
  {
    question: "What types of properties do you offer?",
    answer: "We offer a wide range of properties including residential apartments, houses, commercial buildings, plots, and luxury villas — all in prime locations."
  },
  {
    question: "How do I schedule a property visit?",
    answer: "You can schedule a visit by contacting us directly through the property listing page or by calling our support team. We'll arrange a suitable time for your visit."
  },
  {
    question: "Are the property listings updated regularly?",
    answer: "Yes, we keep our property listings up to date to ensure availability, pricing, and other details are always accurate."
  },
  {
    question: "Can I get help with property financing?",
    answer: "Absolutely! We work with trusted financial institutions to help you explore mortgage and financing options based on your budget and credit profile."
  },
  {
    question: "How can I verify the legal status of a property?",
    answer: "All our listed properties go through a legal vetting process. We also provide documentation upon request to ensure transparency and peace of mind."
  },
  {
    question: "Are there any hidden charges in property transactions?",
    answer: "No, we maintain full transparency. All charges including registration fees, taxes, and agency fees (if applicable) are disclosed upfront."
  },
  {
    question: "Do you offer assistance after the property purchase?",
    answer: "Yes, we provide post-purchase support including help with property management, tenant placement, and utility setups."
  }
];

const Faq = () => {

  return (
    <div className="ltn__faq-area mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <div className="faq-container">
                {faqs?.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      {item.question}
                    </div>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="need-support text-center mt-100">
                <h2>Still need help? Reach out to support 24/7:</h2>
                <div className="btn-wrapper mb-30 go-top">
                  <Link to="/contact" className="theme-btn-1 btn">
                    Contact Us
                  </Link>
                </div>
                <h3>
                  <i className="fas fa-phone" /> +923211793255
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar-area ltn__right-sidebar">
              <div className="widget ltn__banner-widget go-top">
                <img src="/assets/img/blogs/blog3.jpg" alt="Banner Image" />
              </div>
              <div className="widget ltn__banner-widget go-top">
                <img src="/assets/img/blogs/blog4.jpg" alt="Banner Image" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;