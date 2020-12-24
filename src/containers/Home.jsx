import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Platzi Conf Merch - Productos</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@anthony5560"/>
                <meta name="twitter:creator" content="@anthony5560"/>
                <meta name="twitter:title" content="Platzi Conf Store"/>
                <meta name="twitter:description" content="Platzi Conf Store"/>
                <meta
                name="twitter:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="92167" />
            </Helmet>
            <Products />
        </>
    );
}

export default Home;
