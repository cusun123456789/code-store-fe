import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     <section className="blog-page-area pd-top-100 pd-bottom-100">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-details-page-inner">
		          <div className="single-blog-inner m-0">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/blog/4b.png"} alt="image" />
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
		              <h3>Inspired Design Decisions With Herb Typography Can Be As Exciting As Illustration &amp; Photog</h3>
		              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault with a man who chooses </p>
		              <blockquote className="blockquote" style={{background: 'url('+publicUrl+'assets/img/blog/bg.png)'}}>
		                <p>Smashing Podcast Episode With Paul Boag What Is Conversion Optimization</p>
		                <footer className="blockquote-footer">Bailey Dobson</footer>
		              </blockquote>
		            </div>
		            <h4><i className="far fa-check-circle" />Inspired Design Decisions With Otto Storch When Idea Copy</h4>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
		            <div className="meta">
		              <div className="tags">
		                <span>Popular Tags:</span>
		                <a href="#">IT Consulting,</a>
		                <a href="#">Business,</a>
		                <a href="#">Corporate</a>
		              </div>
		              <div className="blog-share">
		                <span>Share:</span>
		                <ul className="social-area social-area-2">
		                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
		                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
		                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
		                  <li><a href="#"><i className="fab fa-behance" /></a></li>
		                </ul>
		              </div>
		            </div>
		            <div className="author-area">
		              <div className="media">
		                <img src={publicUrl+"assets/img/author/blog-author.png"} alt="img" />
		                <div className="media-body align-self-center">
		                  <h4>Nathan George</h4>
		                  <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that aextremely painful. Nor again is there anyone who loves</p>
		                  <ul className="social-area social-area-2">
		                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
		                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
		                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
		                    <li><a href="#"><i className="fab fa-behance" /></a></li>
		                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		            <div className="post-check">
		              <div className="row">
		                <div className="col-lg-6">
		                  <div className="single-news-wrap media">
		                    <img src={publicUrl+"assets/img/widget/1.png"} alt="img" />
		                    <div className="media-body">
		                      <p className="date"><i className="far fa-calendar-alt" aria-hidden="true" />25 Aug 2020</p>
		                      <h6><a href="#">Smashing Podcast Epis <br /> With Rach Andrewe</a></h6>
		                    </div>
		                  </div>
		                </div>
		                <div className="col-lg-6">
		                  <div className="single-news-wrap media text-right">
		                    <div className="media-body">
		                      <p className="date">25 Aug 2020<i className="mr-0 ml-3 far fa-calendar-alt" aria-hidden="true" /></p>
		                      <h6><a href="#">Implementing Infinite <br /> Loading In React</a></h6>
		                    </div>
		                    <img src={publicUrl+"assets/img/widget/6.png"} alt="img" />
		                  </div> 
		                </div>
		              </div> 
		            </div>
		            <div className="related-post">
		              <div className="section-title">
		                <h3>Related Post</h3>
		              </div>
		              <div className="row justify-content-center">
		                <div className="col-md-6">
		                  <div className="recent-post-wrap">
		                    <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
		                    <div className="post-details">
		                      <div className="meta">
		                        <span><i className="far fa-calendar-alt" aria-hidden="true" />25 AUS, 2020</span>
		                      </div>
		                      <h5><a href="#">How Performance Visiblety With GitLab CI &amp; Hood</a></h5>
		                      <a href="#">Learn More <i className="la la-arrow-right" /></a>
		                    </div>
		                  </div>
		                </div>
		                <div className="col-md-6">
		                  <div className="recent-post-wrap">
		                    <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
		                    <div className="post-details">
		                      <div className="meta">
		                        <span><i className="far fa-calendar-alt" aria-hidden="true" />25 AUS, 2020</span>
		                      </div>
		                      <h5><a href="#">Inspired Design Decisions With Max Huber Turne</a></h5>
		                      <a href="#">Learn More <i className="la la-arrow-right" /></a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="blog-comment">
		              <div className="section-title">
		                <h3>Comments</h3>
		              </div>
		              <div className="media">
		                <a href="#">
		                  <img src={publicUrl+"assets/img/author/7.png"} alt="comment" />
		                </a>
		                <div className="media-body">
		                  <h5><a href="#">John F. Medina</a></h5>
		                  <span className="date">25 July 2020</span>
		                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>
		                  <a href="#">Reply <i className="la la-arrow-right" /></a>
		                </div>
		              </div>
		              <div className="media nesting">
		                <a href="#">
		                  <img src={publicUrl+"assets/img/author/8.png"} alt="comment" />
		                </a>
		                <div className="media-body">
		                  <h5><a href="#">Jeffrey T. Kelly</a></h5>
		                  <span className="date">25 July 2020</span>
		                  <p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>
		                  <a href="#">Reply <i className="la la-arrow-right" /></a>
		                </div>
		              </div>
		              <div className="media">
		                <a href="#">
		                  <img src={publicUrl+"assets/img/author/9.png"} alt="comment" />
		                </a>
		                <div className="media-body">
		                  <h5><a href="#">Richard B. Zellmer</a></h5>
		                  <span className="date">25 July 2020</span>
		                  <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>
		                  <a href="#">Reply <i className="la la-arrow-right" /></a>
		                </div>
		              </div>
		            </div>
		            <div className="comment-form">
		              <div className="section-title">
		                <h3>Leave A Reply</h3>
		              </div>
		              <form className="contact-form-wrap">
		                <div className="row">
		                  <div className="col-lg-6 col-md-6 col-12">
		                    <div className="single-input-wrap input-group">
		                      <input type="text" className="form-control" placeholder="Your Full Name" />
		                      <div className="input-group-prepend">
		                        <div className="input-group-text"><i className="far fa-user" /></div>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="col-lg-6 col-md-6 col-12">
		                    <div className="single-input-wrap input-group">
		                      <input type="text" className="form-control" placeholder="Your Email" />
		                      <div className="input-group-prepend">
		                        <div className="input-group-text"><i className="far fa-envelope" /></div>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="col-12">
		                    <div className="single-input-wrap input-group">
		                      <textarea className="form-control" rows={4} name="note" placeholder="Write Message" defaultValue={""} />
		                      <div className="input-group-prepend">
		                        <div className="input-group-text"><i className="fas fa-pencil-alt" /></div>
		                      </div>
		                    </div>
		                    <div className="submit-area">
		                      <button type="submit" className="btn btn-base">Send Reply</button>
		                    </div>
		                  </div>
		                </div>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4">
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
		              <li><a href="#">Financial Planning<i className="la la-angle-right" /></a></li>
		              <li><a href="#">Relationship Buildup<i className="la la-angle-right" /></a></li>
		              <li><a href="#">Investement Planning<i className="la la-angle-right" /></a></li>
		              <li><a href="#">Marketing Strategy<i className="la la-angle-right" /></a></li>
		              <li><a href="#">Product Strategy<i className="la la-angle-right" /></a></li>
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
		                <h6><a href="#">Smashing Podcast Epis With Rach Andrewe</a></h6>
		              </div>
		            </div>
		            <div className="single-news-wrap media">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/widget/2.png"} alt="img" />
		              </div>
		              <div className="media-body">
		                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
		                <h6><a href="#">Responsive Web And Desktop Develope</a></h6>
		              </div>
		            </div>
		            <div className="single-news-wrap media">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/widget/3.png"} alt="img" />
		              </div>
		              <div className="media-body">
		                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
		                <h6><a href="#">Django Highlig Models Admin Harnessing</a></h6>
		              </div>
		            </div>
		          </div>
		          <div className="widget widget-tags widget-border">
		            <h5 className="widget-title">Popular Tags</h5>
		            <div className="tagcloud">
		              <a href="#">Business</a>
		              <a href="#">Corporate</a>
		              <a href="#">HTML</a>
		              <a href="#">Finance</a>
		              <a href="#">Investment</a>
		              <a href="#">CSS</a>
		              <a href="#">Planing</a>
		              <a href="#">Creative</a>
		            </div>   
		          </div>
		          <div className="widget widget-author widget-border text-center">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/widget/4.png" }alt="img" />
		            </div>
		            <div className="author-details">
		              <h4>Brandon Johnston</h4>
		              <span>Author</span>
		              <p>Vero eos et accusamus et iustoys odio dignissimos ducimu blanditiis praesentium voluptatum</p>
		              <ul className="social-area">
		                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
		                <li><a href="#"><i className="fab fa-twitter" /></a></li>
		                <li><a href="#"><i className="fab fa-instagram" /></a></li>
		                <li><a href="#"><i className="fab fa-behance" /></a></li>
		                <li><a href="#"><i className="fab fa-dribbble" /></a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="widget widget-consultation">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/widget/5.png" }alt="img" />
		            </div>
		            <div className="consultation-wrap text-center">
		              <h2>Need Any Consultations</h2>
		              <a className="btn btn-base" href="#">Send Message</a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>


    )
  }
}

export default BlogDetails;
