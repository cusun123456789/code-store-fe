import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductCategory extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="blog-page-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8 order-lg-last go-top">
			        <div className="all-item-section all-item-area-2">        
			          <div className="row">
			            {/* gallery item start here */}
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/7.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="/product-details">Web Platform</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
			                  <span>Paul E. Hensley</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/8.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="/product-details">Case Study</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/2.png"} alt="img" />
			                  <span>Clay J. Barfield</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/9.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="product-details">Project Collaboration</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/3.png"} alt="img" />
			                  <span>Duane A. Oliva</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/10.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="/product-details">Voice Landing Page</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/4.png"} alt="img" />
			                  <span>Cynthia V. Sylvia</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/11.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="product-details">Clean Dashboard</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/5.png"} alt="img" />
			                  <span>Paul E. Hensley</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			            <div className="all-isotope-item col-lg-6 col-sm-6">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/12.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <h4><Link to="/product-details">Website Redesign</Link></h4>
			                <p>Photography Word Press Theme</p>
			                <span className="ratting">
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star" />
			                  <i className="fa fa-star star-o" />
			                  <span>(12)</span>
			                </span>
			                <a href="#" className="author-details align-item-center">
			                  <img src={publicUrl+"assets/img/author/6.png"} alt="img" />
			                  <span>Frances R. Leming</span>
			                </a>
			                <span className="price bg-white float-right">$30.00</span>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="pagination-wrap text-center mt-2">
			          <ul className="pagination pagination-2">
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>
			            <li className="page-item active"><a className="page-link" href="#">01</a></li>
			            <li className="page-item"><a className="page-link" href="#">02</a></li>
			            <li className="page-item"><a className="page-link" href="#">03</a></li>
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="col-lg-4 order-lg-first go-top">
			        <div className="sidebar-area">
			          <div className="widget widget-category widget-border">
			            <h5 className="widget-title">Category</h5>
			            <ul>
			              <li><Link to="/product">Financial Planning<i className="la la-angle-right" /></Link></li>
			              <li><Link to="/product">Relationship Buildup<i className="la la-angle-right" /></Link></li>
			              <li><Link to="/product">Investement Planning<i className="la la-angle-right" /></Link></li>
			              <li><Link to="/product">Marketing Strategy<i className="la la-angle-right" /></Link></li>
			              <li><Link to="/product">Product Strategy<i className="la la-angle-right" /></Link></li>
			            </ul>
			          </div>
			          <div className="widget widget-product-sorting widget-border">
			            <h5 className="widget-title">Filter by price</h5>
			            <div className="slider-product-sorting" />
			            <div className="product-range-detail">
			              <button>Filter</button>
			              <input className="float-right" type="text" id="amount" readOnly />
			              <label className="float-right" htmlFor="amount">Price:</label>
			            </div>
			          </div>
			          <div className="widget widget-news widget-border">
			            <h5 className="widget-title">Recent News</h5>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/1.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Smashing Podcast Epis With Rach Andrewe</Link></h6>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/2.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/3.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Django Highlig Models Admin Harnessing</Link></h6>
			              </div>
			            </div>
			          </div>
			          <div className="widget widget-tags widget-border">
			            <h5 className="widget-title">Popular Tags</h5>
			            <div className="tagcloud">
			              <Link to="/blog-details">Business</Link>
			              <Link to="/blog-details">Corporate</Link>
			              <Link to="/blog-details">HTML</Link>
			              <Link to="/blog-details">Finance</Link>
			              <Link to="/blog-details">Investment</Link>
			              <Link to="/blog-details">CSS</Link>
			              <Link to="/blog-details">Planing</Link>
			              <Link to="/blog-details">Creative</Link>
			            </div>   
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
 
        }
}

export default ProductCategory