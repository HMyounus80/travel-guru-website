import React from 'react';
import logo from '../../Logo.png';
import { Link } from 'react-router-dom';
// import Home from '../Home/Home.css';
import Rectangle1 from '../../Image/Rectangle 26.png'
import star_1_ from "../../Icon/star_1_.png";
import Rectangle2 from "../../Image/Rectangle 27.png";
import Rectangle3 from "../../Image/Rectangle 28.png";

const Booking = () => {
    const imgStyle = {
        maxWidth: '100%',
        height: '200px'
    };
    return (

        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
               <img class="logo w-25" src={logo} alt="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/home" class="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link  class="nav-link " href="#">Booking</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " href="#">Pricing</Link>
                    </li>
                        <button className="btn btn-warning"><Link>Login</Link></button>
                    </ul>
            </div>
        </nav>
        <hr/>
        <div className="container">
            <p>252 stys Apr 13-17-3 guests</p>
            <h4>Stay in Cox's Bazar</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mb-3" style={{maxWidth:"540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img style={imgStyle} src={Rectangle1} class=" img-fluid" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Light bright airy stylish apt  and safe peacegul stay </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px" }}>4.9(20)</span><span  style={{fontSize:"20px" }}>$34/<small class="night">night</small>  </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Rectangle2} class=" img-fluid" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Apertment in lost panorama </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"20px"}}>4.9(20)</span><span  style={{fontSize:"20px" }}>$50/<small class="night">night</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Rectangle3} class=" img-fluid" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">AR Lounge and pool  </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"20px" }}>4.9(10)</span><span  style={{fontSize:"20px" }}>$44/<small class="night">night</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             <div className="col-md-6">
                 
             </div>
         </div>
        </div>
    </div>
    
    );
};
 

export default Booking;