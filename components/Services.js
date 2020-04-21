import React from "react";

const Services = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <div className="block-title text-center">
          <span className="block-title__bubbles"></span>
          <p>Nuestros servicios</p>
          <h3>Todo lo que necesitas, en un solo lugar</h3>
        </div>
        <div className="row">
          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="000ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-responsive"></i>
              <h3>Plataforma para tu colegio</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-computer-graphic"></i>
              <h3>Sistema de capacitacion para tus profesores</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-development1"></i>
              <h3>Da clases virtuales</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-development"></i>
              <h3>Asesoria por profesionales de E-learning</h3>
            </div>
          </div>

          <div
            className="service-one__col wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div className="service-one__single">
              <i className="zimed-icon-development"></i>
              <h3>Soporte tecnico en la plataforma</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
