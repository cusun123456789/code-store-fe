import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
     <div className="col-lg-4 go-top">
          <div className="sidebar-area">
            <div className="widget widget-search">
              <div className="single-search-inner">
                <input type="text" placeholder="Search here" />
                <button><i className="la la-search" /></button>
              </div>
            </div>
            <div className="widget widget-category widget-border">
              <h5 className="widget-title">Category</h5>
              <ul>
                <li><Link to="/blog">Financial Planning<i className="la la-angle-right" /></Link></li>
                <li><Link to="/blog">Relationship Buildup<i className="la la-angle-right" /></Link></li>
                <li><Link to="/blog">Investement Planning<i className="la la-angle-right" /></Link></li>
                <li><Link to="/blog">Marketing Strategy<i className="la la-angle-right" /></Link></li>
                <li><Link to="/blog">Product Strategy<i className="la la-angle-right" /></Link></li>
              </ul>
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
                  <img src={publicUrl+"assets/img/widget/2.png" }alt="img" />
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
                <Link to="/blog">Business</Link>
                <Link to="/blog">Corporate</Link>
                <Link to="/blog">HTML</Link>
                <Link to="/blog">Finance</Link>
                <Link to="/blog">Investment</Link>
                <Link to="/blog">CSS</Link>
                <Link to="/blog">Planing</Link>
                <Link to="/blog">Creative</Link>
              </div>   
            </div>
            <div className="widget widget-author widget-border text-center">
              <div className="thumb">
                <img src={publicUrl+"assets/img/widget/4.png"} alt="img" />
              </div>
              <div className="author-details">
                <h4>Brandon Johnston</h4>
                <span>Author</span>
                <p>Vero eos et accusamus et iustoys odio dignissimos ducimu blanditiis praesentium voluptatum</p>
                <ul className="social-area">
                  <li><a href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://www.twitter.com/solverwp/"><i className="fa fa-twitter" /></a></li>
                  <li><a href="https://www.instagram.com/solverwp/"><i className="fa fa-instagram" /></a></li>
                  <li><a href="https://www.behance.com/solverwp/"><i className="fa fa-behance" /></a></li>
                  <li><a href="https://www.dribbble.com/solverwp/"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </div>
            </div>
            <div className="widget widget-consultation">
              <div className="thumb">
                <img src={publicUrl+"assets/img/widget/5.png"} alt="img" />
              </div>
              <div className="consultation-wrap text-center">
                <h2>Need Any Consultations</h2>
                <a className="btn btn-base" href="#">Send Message</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar;
