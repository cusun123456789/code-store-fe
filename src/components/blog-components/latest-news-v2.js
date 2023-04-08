import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LatestNewsV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
    	<section className="blog-area-2 pd-top-90 pd-bottom-70 bg-sky-blue go-top">
		  <div className="container">
		    <div className="row justify-content-center ">
		      <div className="col-lg-6">
		        <div className="section-title text-center">
		          <h2>Recent Articles</h2>
		          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		            </div>
		            <h5><Link to="/blog-details">10 Reasons To Start Your Own, Profitable Website!</Link></h5>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		            </div>
		            <h5><Link to="/blog-details">You can also find trends and techniques from other UXers</Link></h5>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-wrap">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/3.png" }alt="img" />
		          </div>
		          <div className="blog-details">
		            <div className="meta">
		              <span><i className="far fa-calendar-alt" />28 JANUARY, 2020</span>
		            </div>
		            <h5><Link to="/blog-details">UX design blog focusing on accessibility and design.</Link></h5>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

    )
  }
}

export default LatestNewsV2;
