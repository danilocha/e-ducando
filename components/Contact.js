import React from "react";

const Contact = () => {
  return (
    <section className="contact-one" id="contact">
      <img
        src="/assets/images/shapes/contact-shape-1.png"
        alt=""
        className="contact-one__shape-1"
      />
      <img
        src="/assets/images/shapes/contact-shape-2.png"
        alt=""
        className="contact-one__shape-2"
      />
      <img
        src="/assets/images/shapes/contact-shape-3.png"
        alt=""
        className="contact-one__shape-3"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-one__content">
              <div className="contact-one__images">
                <div className="footer">
                  <img
                    src="/assets/images/logo-1-1.png"
                    width="105"
                    alt="Awesome Image"
                  />
                  <span>ducando</span>
                </div>
              </div>
              <div className="contact-one__infos">
                <div className="contact-one__infos-single"></div>
                <div className="contact-one__infos-single">
                  <div className="contact-one__infos-icon">
                    <i className="zimed-icon-message"></i>
                  </div>
                  <div className="contact-one__infos-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:educandolat@gmail.com">
                        educandolat@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-one__form-wrap">
              <div className="block-title">
                <span className="block-title__bubbles"></span>
                <p>Contactanos</p>
                <h3>Dejanos un mensaje</h3>
              </div>
              <form
                action=""
                className="contact-form-validated contact-one__form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Nombre" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" placeholder="Asunto" />
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" placeholder="Mensaje"></textarea>
                    <button
                      type="submit"
                      className="thm-btn contact-one__form-btn"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
