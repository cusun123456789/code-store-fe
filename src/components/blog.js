import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-list';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Standard"  />
        <BlogList />
        <Footer />
    </div>
}

export default BlogPage

