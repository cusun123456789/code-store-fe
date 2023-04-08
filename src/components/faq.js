import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqPage from './section-components/faq';
import Footer from './global-components/footer';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="FAQ" subheader="pages"  />
        <FaqPage />
        <Footer />
    </div>
}

export default Faq

