import React, { useState, useEffect } from 'react';

import clienteAxios from '../config/clienteAxios'
import ListaArticulos from './listaArticulos';

const Blog = () => {

    const [articulos, guardarArticulos] = useState()

    const consultarApi = async () => {
        const articulosConsulta = await clienteAxios.get('/articles')

        guardarArticulos(articulosConsulta.data)
    }

    useEffect(() => {
        consultarApi();
    }, [])

    const contenido = articulos ? <ListaArticulos articulos={articulos} /> : "cargando contenido..."

    return (

        <section className="blog-one blog-one__home blog-one__grid">
            <div className="container">



                {contenido}




                {/* <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-left"></i></a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </div> */}
            </div>
        </section>
    )
}
export default Blog;