import React, { Component } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeV1 from './components/home-v1';

import Product from './components/product';
import ProductDetails from './components/product-details';
import Vendor from './components/vendor';
import Category from './components/category';
import Faq from './components/faq';
import Policy from './components/policy';
import Error from './components/error';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';

const client = new ApolloClient({
	uri: 'https://flyby-router-demo.herokuapp.com/',
	cache: new InMemoryCache(),
});

const Root = () => {
	return(
		<ApolloProvider client={client}>
    <Router >
			<Routes >
				<Route exact path="/" element={<HomeV1/>} />
				<Route  path="/product" element={<Product/>} />
				<Route  path="/product-details" element={<ProductDetails/>} />
				<Route  path="/vendor" element={<Vendor/>} />
				<Route  path="/category" element={<Category/>} />
				<Route  path="/faq" element={<Faq/>} />
				<Route  path="/policy" element={<Policy/>} />
				<Route  path="/error" element={<Error/>} />
				<Route  path="/sign-in" element={<SignIn/>} />
				<Route  path="/sign-up" element={<SignUp/>} />
				<Route  path="/contact" element={<Contact/>} />
				<Route path="/blog" element={<Blog/>} />
				<Route path="/blog-details" element={<BlogDetails/>} />
			</Routes>
		</Router>
  </ApolloProvider>
)
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));
