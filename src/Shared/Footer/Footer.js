import React from 'react';
import {Button} from 'react-bootstrap';

const Footer = () => {
    return (
        <section style={{background:"#2F4C50", color:'white'}}>
            <div className="row mt-5">
                <div className="col-md-3 mt-5">
                    <h1>Useful links</h1>
                    <ul style={{textIndent:'none'}}>
                        <span>About Us</span><br/>
                        <span>Our Community</span><br/>
                        <span>Local Events</span><br/>
                        <span>Privacy policy</span><br/>
                        <span>Service Plus</span><br/>
                    </ul>
                </div>
                <div className="col-md-3 mt-5">
                    <h1>Our shop</h1>
                    <ul style={{textIndent:'none'}}>
                        <span>Bikes & parts</span><br/>
                        <span>Clothing</span><br/>
                        <span>Bikes for rent</span><br/>
                        <span>Booking form</span><br/>
                        <span>Service Plus</span><br/>
                    </ul>
                </div>
                <div className="col-md-3 mt-5">
                    <h1>Sitemap</h1>
                    <ul style={{textIndent:'none'}}>
                        <span>Home</span><br/>
                        <span>Features</span><br/>
                        <span>Shop</span><br/>
                        <span>News</span><br/>
                        <span>Service Plus</span><br/>
                    </ul>
                </div>
                <div className="col-md-3 mt-5">
                    <h1>Subscribe</h1>
                    <ul style={{textIndent:'none'}}>
                        <span>
                            <form >
                                <input placeholder="Enter Your Email" style={{marginRight:'30px' ,padding:'10px'}}  type="email" />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </form>
                        </span><br />
                        <div className="row">
                            <div className="col-md-6">
                                <h5><i className="fab fa-facebook"><span  style={{padding:'10px'}} >facebook</span></i> </h5>
                            </div>
                            <div className="col-md-6">
                                <h5> <i className="fab fa-instagram-square"> <span style={{padding:'10px'}} >Instagram</span></i></h5>
                            </div>
                        </div>
                        <div className="row m-3">
                            <div className="col-md-6">
                                <h5><i className="fab fa-twitter"><span  style={{padding:'10px'}}>Twitter</span></i></h5>
                            </div>
                            <div className="col-md-6">
                                <h5><i className="fab fa-youtube"><span style={{padding:'10px'}}>youtube</span></i></h5>
                            </div>
                        </div>
                    </ul>
                </div>
                <p>ThemeREX © 2021. All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Footer;