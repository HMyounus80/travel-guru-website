import React from 'react';
import './Home.css';
import logo from '../../Logo.png';
import Rectangle from '../../Image/Rectangle.png';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
   <body>
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Rectangle})` }} className="header">
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-light">
       <img className="logo" src={logo} alt=""/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav px-5">
            <input className="input-filed " type="text" placeholder="Search Your Destination"/>
        <li class="nav-item active">
            <Link to="/home" class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
            <Link to="/booking"  class="nav-link text-white" href="#">Booking</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link text-white" href="#">Pricing</Link>
        </li>
            <Link to="/login"><button className="btn btn-warning">Login</button></Link>
        </ul>
    </div>
    </nav>
    </div>
    <div className="container">
          <div className="row">
              <div className="col-md-3">
                  <h1 className="text-white">Sajek Valley</h1>
                  <p className="text-white">Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills  Roof of Rangamati.</p>
                  <button className="btn btn-warning">Booking --></button>
              </div>
              <div className="col-md-3">
                 <Link to="/sajek"> <img className="img" class="img-fluid" src={Sajek} alt=""/></Link>
                  <h2 className="title">Sajek Valley</h2>
              </div>
              <div className="col-md-3">
                 <Link to="/sreemongol"> <img className="img" class="img-fluid" src={Sreemongol} alt=""/></Link>
                  <h2 className="title">Sreemongol</h2>
              </div>
              <div className="col-md-3">
                 <Link to="/sundorbon"><img className="img" class="img-fluid" src={sundorbon} alt=""/>
                  <h2 className="title">Sundorbon</h2></Link> 
              </div>
          </div>
      </div>
    </div>
     
    </body>
    
  
    );
};

export default Home;