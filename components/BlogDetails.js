import React from 'react';

const BlogDetails = ({ articulo }) => {
    const { autor } = articulo
    console.log(autor)
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-details__content">
                            <div className="blog-details__image">
                                <img src={`http://localhost:5000/${articulo.imagen}`} alt="" />
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: articulo.contenido }}></div>
                        </div>
                        <div className="blog-details__bottom">
                            <p className="blog-details__tags">
                                <span>Compartir:</span>

                            </p>
                            <div className="blog-details__social site-footer__social">
                                <a className="fab fa-facebook-f" href="#"></a>
                                <a className="fab fa-twitter" href="#"></a>
                                <a className="fab fa-instagram" href="#"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div>
                        </div>

                        {/* <div className="author-one">
                            <div className="author-one__image">
                                <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                            </div>

                             <div className="author-one__content">
                                <h3>{autor.nombre} {autor.apellido}</h3> 
                                <p></p>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetails;