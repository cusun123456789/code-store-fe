import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="product-details pd-top-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="single-product-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/product/1.png"} alt="image" />
		            <a className="btn btn-white" href="#">Live Preview</a>
		            <a className="btn btn-white btn-buy" href="#">Buy Now</a>
		          </div>
		          <div className="single-product-details">
		            <h4><a href="#">Landing page - Kitchen</a></h4>
		            <p>Photography Word Press Theme</p>                            
		          </div>
		        </div>
		        <div className="product-tab">
		          <ul className="nav nav-pills">
		            <li className="nav-item">
		              <a className="nav-link active" data-toggle="pill" href="#pills-home">Description</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" data-toggle="pill" href="#pills-profile">Reviews (2)</a>
		            </li>
		          </ul>
		          <div className="tab-content">
		            <div className="tab-pane fade show active" id="pills-home">
		              <p>Đây là một mẫu HTML đa năng, hiện đại và hoàn toàn đáp ứng. Mẫu này bao gồm nhiều mẫu trang web HTML khác nhau - phù hợp cho bất kỳ cơ quan doanh nghiệp, cá nhân sáng tạo hoặc hồ sơ cá nhân nào. Seppo tương thích với tất cả các thiết bị di động và trình duyệt hiện đại. Mẫu được tài liệu tốt và có code clean.</p>
		              <h5 className="title">Features Overview</h5>
		              <ul>
		                <li>
		                  <p className="font-medium">Bootstrap 4 Framework:</p>
		                  <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</p>
		                </li>
		                <li>
		                  <p className="font-medium">Slick Carousel:</p>
		                  <p>Create stunning slides with different animation effects easily with Slick Slider.</p>
		                </li>
		                <li>
		                  <p className="font-medium">Responsive Layout Design:</p>
		                  <p>What ever you are using the device your site will run as it should be. Kettle template is fully responsive layout for all type of devices.</p>
		                </li>
		                <li>
		                  <p className="font-medium">13+ Valid HTML Files :</p>
		                  <p>Kettle template coded with beautiful and clean codes! Some powerful HTML files 100% valid W3 web standards.</p>
		                </li>
		              </ul>
		            </div>
		            <div className="tab-pane fade" id="pills-profile">
		              <h5 className="title">Reviews (2)</h5>
		              <div className="single-review">
		                <h6 className="name">Tyler Bailey</h6>
		                <span className="date">13 August 2019</span>
		                <div className="star-rating">
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                </div> 
		                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
		              </div>
		              <div className="single-review">
		                <h6 className="name">Tom Clark</h6>
		                <span className="date">13 August 2019</span>
		                <div className="star-rating">
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star" /></span>
		                  <span><i className="la la-star-o" /></span>
		                </div> 
		                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
		              </div>
		              <div className="add-review">
		                <h5 className="title">Add Review</h5>
		                <div className="star-rating">
		                  <p>Your Rating:</p>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                  <span><i className="la la-star star-o" /></span>
		                </div> 
		                <form className="contact-form">
		                  <div className="row">
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <input type="text" className="single-input" placeholder="Your Name" />
		                      </div>
		                    </div>
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <input type="text" className="single-input" placeholder="Your Email" />
		                      </div>
		                    </div>
		                    <div className="col-12">
		                      <div className="single-input-wrap">
		                        <textarea className="single-input textarea" placeholder="Your Review" defaultValue={""} />
		                      </div>
		                    </div>
		                  </div>
		                  <a className="btn btn-base" href="#">Submit</a>
		                </form>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
		        <div className="sidebar-area">
		          <div className="widget widget-cart">
		            <div className="widget-cart-inner text-center">
		              <h3 className="price">$30.00</h3>
		              <span className="ratting">
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star star-o" />
		              </span>
		              <ul>
		                <li><i className="fa fa-shopping-cart" />12 Sales</li>
		                <li><i className="fa fa-star" />5 Ratting</li>
		                <li><i className="fa fa-eye" />125 Views</li>
		              </ul>
		              <a className="btn btn-base" href="#">Add to cart</a>
		            </div>
		          </div>
		          <div className="widget widget-client text-center">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/icon/3.png"} alt="img" />
		            </div>
		            <h4>Clay J. Barfield</h4>
		            <span className="ratting">
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star" />
		              <i className="fa fa-star star-o" />
		              <span>(12)</span>
		            </span>
		          </div>
		          <div className="widget widget-list">
		            <ul>
		              <li><span>Last Update</span>28 January 19</li>
		              <li><span>Created</span>26 September 18</li>
		              <li><span>High Resolution</span>Yes</li>
		              <li><span>Browsers</span>IE11, Firefox, Safari, Opera, Chrome, Edge
		              </li>
		              <li><span>Compatible With</span>Bootstrap 4.x <br />Included PHP Files, <br />HTML Files, CSS, <br />JS Files                                   
		              </li>
		              <li><span>Columns</span>4+</li>
		              <li><span>Documentation</span>Well Documentation</li>
		              <li><span>Layout</span>Responsive</li>
		              <li><span>Tags</span>bakery, bar, blog, burger, cafe, chef, food, grill, menu                   
		              </li>
		            </ul>   
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
  


        }
}

export default ProductDetails