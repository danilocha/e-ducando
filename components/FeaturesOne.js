import React from "react";

const FeaturesOne = () => {
  return (
    <div className="cta-three">
      <img
        src="/assets/images/shapes/cta-1-shape-2.png"
        alt=""
        className="cta-three__shape-2"
      />

      <div className="container">
        <img
          src="/assets/images/resources/clase-online.jpg"
          alt=""
          className="cta-three__moc"
        />
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-three__content">
              <div className="block-title text-left">
                <span className="block-title__bubbles"></span>
                <p>Plataforma</p>
                <h3>Toma el control digital</h3>
              </div>
              <div className="cta-three__box-wrap">
                <div className="cta-three__box">
                  <div className="cta-three__box-icon">
                    <i className="zimed-icon-strategy"></i>
                  </div>
                  <div className="cta-three__box-content">
                    <h3>Organizamos tu plataforma</h3>
                    <p>
                      Nuestro equipo de ingeniera se va a preocupar por el
                      servidor, la programacion y la estructura del sistema,
                      juntos lo perzonalizaremos volviendolo parte de tu
                      institucion
                    </p>
                  </div>
                </div>

                <div className="cta-three__box">
                  <div className="cta-three__box-icon">
                    <i className="zimed-icon-training"></i>
                  </div>

                  <div className="cta-three__box-content">
                    <h3>Da clases</h3>
                    <p>
                      Podras publicar de manera ordenada todo el material
                      academico, crear espacios para conectarte con tus
                      estudiantes en vivo, permitirles subir sus trabajos y
                      revisarlos desde la plataforma
                    </p>
                  </div>
                </div>
              </div>

              <a href="#" className="thm-btn cta-three__btn">
                Comencemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesOne;
