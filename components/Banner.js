import React from "react";

const Banner = () => {
  return (
    <section
      className="banner-one"
      id="banner"
      style={{
        backgroundImage: `url(/assets/images/background/banner-bg-1-1.png)`,
      }}
    >
      <img
        src="/assets/images/mocs/educacion.png"
        alt=""
        className="banner-one__shape-moc-1"
      />
      <div className="container">
        <img
          src="/assets/images/shapes/banner-shapes-1-3.png"
          alt=""
          className="banner-one__moc"
        />

        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <h3>Mejoramos la experiencia de la educacion</h3>
              <p className="banner-one__tag-line">
                Bienvenido, habla con un asesor <a href="#">ahora</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
