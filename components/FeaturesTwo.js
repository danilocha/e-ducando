import React from "react";

const FeaturesTwo = () => {
  return (
    <section className="cta-two">
      <img
        src="/assets/images/shapes/cta-2-shape-1.png"
        alt=""
        className="cta-two__shape-1"
      />
      <img
        src="/assets/images/shapes/cta-2-shape-2.png"
        alt=""
        className="cta-two__shape-2"
      />
      <div className="container">
        <img
          src="/assets/images/shapes/cta-2-shape-3.png"
          alt=""
          className="cta-two__shape-3"
        />
        <img
          src="/assets/images/resources/profesores.png"
          alt=""
          className="cta-two__moc"
        />
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Capacitacion docente</p>
                <h3>¿Tu equipo esta preparado para la educacion online?</h3>
              </div>

              <p className="parrafos">
                Contamos con especialistas en E-learning preparados para guiarte
                a llevar tus clases al mundo online, mejorar la efectividad.
                Sabemos que en las casas los estudiantes tienen muchas
                distracciones y las metodologias de educacion no deben ser las
                mismas
              </p>
              <a href="#" className="thm-btn cta-two__btn">
                !Quiero Aprender!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesTwo;
