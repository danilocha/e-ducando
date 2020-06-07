import React from 'react';
import Link from 'next/link';

const ListaArticulos = ({ articulos }) => {
    console.log(articulos)
    return (
        <div className="row">
            {articulos.map(articulo => (
                <div className="col-lg-4 col-md-6">
                    <div className="blog-one__single">
                        <div className="blog-one__image">
                            <img src={`http://localhost:5000/${articulo.imagen}`} alt="" />
                        </div>
                        <div className="blog-one__content">

                            <h3>
                                <Link href="/articulos/[articulo]" as={`articulos/${articulo.slug}`}>
                                    <a>{articulo.titulo}
                                    </a>
                                </Link>
                            </h3>
                            <Link href="/articulos/[articulo]" as={`articulos/${articulo.slug}`}>
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ListaArticulos;