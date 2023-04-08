import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductDetailsPage from './section-components/product-details';
import ProductSlider from './section-components/product-slider';
import Footer from './global-components/footer';

const ProductDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Products Details" subheader="pages"  />
        <ProductDetailsPage />
        <ProductSlider />
        <Footer />
    </div>
}

export default ProductDetails

