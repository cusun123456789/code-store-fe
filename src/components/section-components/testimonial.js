import React, { Component } from 'react';


class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="testimonial-area text-center pd-top-90 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-7">
			        <div className="section-title text-center">
			          <h2>Thousands Of Happy Customers!</h2>
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-12">
			        <div className="testimonial-slider owl-carousel owl-theme">
			          <div className="item">
			            <div className="testimonial-wrap">
			              <div className="icon">
			                <img src={publicUrl+"assets/img/testimonial/quote.png" }alt="img" />
			              </div>
			              <p>Lorem ipsum dolor sit amet, sed ctetur adipisicing elit, seds eiusmod tempor incididunt ut labore </p>
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/testimonial/1.png"} alt="img" />
			              </div>
			              <h5 className="name">George L. Parisi</h5>
			              <p className="designation">Doogle inc.</p>
			            </div>
			          </div>
			          <div className="item">
			            <div className="testimonial-wrap">
			              <div className="icon">
			                <img src={publicUrl+"assets/img/testimonial/quote.png"} alt="img" />
			              </div>
			              <p>Lorem ipsum dolor sit amet, sed ctetur adipisicing elit, seds eiusmod tempor incididunt ut labore </p>
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/testimonial/2.png"} alt="img" />
			              </div>
			              <h5 className="name">Miguel V. Henley</h5>
			              <p className="designation">Doogle inc.</p>
			            </div>
			          </div>
			          <div className="item">
			            <div className="testimonial-wrap">
			              <div className="icon">
			                <img src={publicUrl+"assets/img/testimonial/quote.png"} alt="img" />
			              </div>
			              <p>Lorem ipsum dolor sit amet, sed ctetur adipisicing elit, seds eiusmod tempor incididunt ut labore </p>
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/testimonial/3.png"} alt="img" />
			              </div>
			              <h5 className="name">Mary Gregory</h5>
			              <p className="designation">Doogle inc.</p>
			            </div>
			          </div>
			        </div>                  
			      </div>
			    </div>
			  </div>
			</section>



        }
}

export default Testimonial