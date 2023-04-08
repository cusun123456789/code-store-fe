import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSlider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="product-slider-area pd-bottom-40">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="section-title">
			          <h2>Related products</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="product-slider owl-carousel owl-theme">
			          <div className="item">
			            <div className="all-isotope-item">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <span className="price">$30.00</span>
			                <span className="ratting float-right">
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star star-o" aria-hidden="true" />
			                  <span>(12)</span>
			                </span>
			                <h4><a href="#">Kiamu</a></h4>
			                <p>Photography Word Press Theme</p>
			              </div>
			            </div>
			          </div>
			          <div className="item">
			            <div className="all-isotope-item">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/2.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <span className="price">$30.00</span>
			                <span className="ratting float-right">
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star star-o" aria-hidden="true" />
			                  <span>(12)</span>
			                </span>
			                <h4><a href="#">Russell brown</a></h4>
			                <p>Photography Word Press Theme</p>
			              </div>
			            </div>
			          </div>  
			          <div className="item">
			            <div className="all-isotope-item">
			              <div className="thumb">
			                <a className="gallery-fancybox" href="#">
			                  <img src={publicUrl+"assets/img/item/3.png"} alt="image" />
			                </a>
			                <a className="btn btn-white" href="#">Live Preview</a>
			              </div>
			              <div className="item-details">
			                <span className="price">$30.00</span>
			                <span className="ratting float-right">
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star" aria-hidden="true" />
			                  <i className="fa fa-star star-o" aria-hidden="true" />
			                  <span>(12)</span>
			                </span>
			                <h4><a href="#">Mobile application - LonKat</a></h4>
			                <p>Photography Word Press Theme</p>
			              </div>
			            </div>
			          </div>                                          
			        </div>
			      </div>
			    </div>
			  </div>      
			</section>

 
        }
}

export default ProductSlider