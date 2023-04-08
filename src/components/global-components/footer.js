import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="footer-area pd-top-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="footer-widget widget widget_contact">
								<h4 className="widget-title">Contact Us</h4>
								<div className="media">
									<div className="thumb">
										<img src={publicUrl + "assets/img/footer/1.png"} alt="img" />
									</div>
									<div className="media-body">
										<p>33 Xo Viet Nghe Tinh</p>
										<p>Dong A</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/2.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">congquyetgioan@gmail.com</p>
									</div>
								</div>
								<div className="media">
									<div className="thumb mt-0">
										<img src={publicUrl + "assets/img/footer/3.png"} alt="img" />
									</div>
									<div className="media-body">
										<p className="m-0">0352323054</p>
									</div>
								</div>
								<ul className="social-area">
									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" /></a></li>
									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" /></a></li>
									<li><a href="https://www.google-plus.com/solverwp/"><i className="fab fa-google-plus-g" /></a></li>
									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" /></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget widget_nav_menu">
								<h4 className="widget-title">Useful link</h4>
								<ul className="go-top">
									<li><Link to="/product">All Products</Link></li>
									<li><Link to="/faq">FAQ’S</Link></li>
									<li><Link to="/policy">Terms &amp; Conditions</Link></li>
									<li><Link to="/sign-in">Sign up</Link></li>
									<li><Link to="/blog">Articles</Link></li>
									<li><Link to="/category">Popular tags</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget widget widget_products">
								<h4 className="widget-title">Products</h4>
								<ul className="go-top">
									<li><Link to="/category">Graphics (26)</Link></li>
									<li><Link to="/category">Backgrounds (11)</Link></li>
									<li><Link to="/category">Fonts (9)</Link></li>
									<li><Link to="/category">Music (3)</Link></li>
									<li><Link to="/category">Photography (3)</Link></li>
									<li><Link to="/category">Themes (3)</Link></li>
									<li><Link to="/category">Web Templates (3)</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 offset-lg-1 col-md-6">
							<div className="footer-widget widget widget_news">
								<h4 className="widget-title">Latest News</h4>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">The heights by great men</Link> </p>
								</div>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">Top ten way to get success</Link> </p>
								</div>
								<div className="widget-news-wrap">
									<div className="date">May 11, 2020</div>
									<p> <Link to="/blog-details">How to start selling ?</Link> </p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Footer bottom*/}
				<div className="container">
					<div className="copyright-area">
						<div className="row">
							<div className="col-lg-6 align-self-center">
								<p>code by hoang cong quyet. </p>
							</div>
							<div className="col-lg-6 text-lg-right">
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>


		)
	}
}


export default Footer_v1