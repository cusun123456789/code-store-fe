import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import SignInPage from './section-components/sign-in';
import Footer from './global-components/footer';

const SignIn = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Sign In" />
        <SignInPage />
        <Footer />
    </div>
}

export default SignIn

