import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import SignUpPage from './section-components/sign-up';
import Footer from './global-components/footer';

const SignIn = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sign Up" />
        <SignUpPage />
        <Footer />
    </div>
}

export default SignIn

