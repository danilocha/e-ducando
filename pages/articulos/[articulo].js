import react, { useEffect, useState } from 'react'
import Layout from "../../components/Layout";
import NavFooter from "../../components/NavFooter";
import PageHeader from "../../components/PageHeader";
import BlogDetails from "../../components/BlogDetails";
import Footer from "../../components/Footer";
import { useRouter } from 'next/router'
import clienteAxios from '../../config/clienteAxios'



const Articulo = () => {
    // Routing para obtener el slug
    const router = useRouter();
    const [art, guardarArticulo] = useState({})
    const { query: { articulo } } = router

    const consultarApi = async () => {
        if (articulo) {
            const res = await clienteAxios.get(`articles/edit/${articulo}`)
            guardarArticulo(res.data[0])
        }

    }
    useEffect(() => {

        consultarApi()
        console.log(art)
    }, [articulo])
    const arti = art ? <BlogDetails articulo={art} /> : "Cargando ..."
    return (

        <Layout pageTitle={articulo}>
            <NavFooter />
            <PageHeader title={art.titulo} />
            {arti}
            <Footer />
        </Layout>
    )
}



export default Articulo;