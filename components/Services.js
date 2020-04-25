import React from "react";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p></p>
          <h3>La educación es la misma pero el modelo es diferente</h3>
        </div>
        <div className="row">
          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="000ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-responsive"></i>
              <h3>Mejorar la experiencia de educación de los alumnos</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-computer-graphic"></i>
              <h3>Mejorar la imagen de la institucion de cara a los padres</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-development1"></i>
              <h3>
                Mejorar las competencias de los docentes reduciendo su estres
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
