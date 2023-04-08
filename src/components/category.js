import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductCategoryPage from './section-components/product-category';
import Footer from './global-components/footer';

const Category = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Products" subheader="Products"  />
        <ProductCategoryPage />
        <Footer />
    </div>
}

export default Category

