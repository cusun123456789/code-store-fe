import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <section className="blog-page-area pd-top-100 pd-bottom-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8 go-top">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1b.png"} alt="image" />
		            <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="far fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="far fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Inspired Design Decisions With Herb Typography Can Be As Exciting As Illustration &amp; Photog</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <a className="btn btn-base" href="#">Learn More</a>
		          </div>
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2b.png"} alt="image" />
		            <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="far fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="far fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">What Should You Do When A Web Design Trend Becomes Too Popular? Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <a className="btn btn-base" href="#">Learn More</a>
		          </div>
		        </div>
		        <div className="single-blog-inner single-blog-inner-2" style={{background: 'url('+publicUrl+'assets/img/blog/bg.png)'}}>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="far fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="far fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">Visual Design Language The Building Blocks Of Design  Web Design Trend Becomes</Link></h3>
		          </div>
		        </div>
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/3b.png" }alt="image" />
		            <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		          </div>
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="far fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="far fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><Link to="/blog-details">How Increase Mobile Conversions With Category Page DesignTrend Becomes Typography</Link></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <a className="btn btn-base" href="#">Learn More</a>
		          </div>
		        </div>
		        <div className="single-blog-inner single-blog-inner-3">
		          <div className="single-blog-details">
		            <div className="meta">
		              <span className="author">
		                <i className="far fa-user" />
		                Nichel Jhon
		              </span>
		              <span className="date">
		                <i className="far fa-calendar-alt" />
		                25 Aug 2020
		              </span>
		              <span className="comments">
		                <i className="far fa-comments" />
		                Comments (05)
		              </span>
		            </div>
		            <h3><a href="#">Inspired Design Decisions With Otto Storch When Idea Copy Art And Typography</a></h3>
		            <p>But must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itse</p>
		            <a className="btn btn-base" href="#">Learn More</a>
		          </div>
		        </div>
		        <ul className="pagination pagination-2">
		          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>
		          <li className="page-item active"><a className="page-link" href="#">01</a></li>
		          <li className="page-item"><a className="page-link" href="#">02</a></li>
		          <li className="page-item"><a className="page-link" href="#">03</a></li>
		          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>
		        </ul>
		      </div>
		      <Sidebar />
		    </div>
		  </div>
		</section>


    )
  }
}

export default BlogList;
