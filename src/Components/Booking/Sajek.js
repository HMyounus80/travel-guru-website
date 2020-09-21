import React from 'react';
import logo from '../../Logo.png';
import Home from '../Home/Home.css';
import Rectangle from '../../Image/Rectangle.png';
import { Link ,useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    border: "none",
    padding: "20px",
    borderRadius: "5px",
    
    
  },
}));

const Sajek = () => {
    const history = useHistory()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        history.push("/booking")
    }
    const classes = useStyles();
    return (
     
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
                <Link  class="nav-link text-white" href="#">Booking</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-white" href="#">Pricing</Link>
            </li>
                <button className="btn btn-warning"><Link>Login</Link></button>
            </ul>
        </div>
        </nav>
        </div>
        <div className="container">
              <div className="row">
                  <div className="col-md-6 mt-3">
                      <h1 className="text-white">Sajek Valley</h1>
                      <p className="text-white">Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills  Roof of Rangamati.</p>
                      <button className="btn btn-warning">Booking --></button>
                  </div>
                   <div className="col-md-6">
                       <form onSubmit={handleFormSubmit}>
                        <div className="input-aria">
                            <p>Origin</p>
                            <input class="input-type" type="text" name=""  required/>
                            <p>Destination</p>
                            <input class="input-type" type="text"  required/>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>From</p>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            type="date"
                                            defaultValue="2020-09-10"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <p>To</p>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            type="date"
                                            defaultValue="2020-12-10"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }} 
                                        />
                                    </form>
                                </div>
                            </div>
                            <br/>
                            <input className="input-button" type="submit" value="Start Booking"/>
                            </div>
                            </form>
                            <br/>
              </div>
          </div>
        </div>
        
       </div>
       
    );
};

export default Sajek;