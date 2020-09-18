import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fb from '../../Icon/fb.png';
import google from '../../Icon/google.png';

const Login = () => {
    const [LoginUser, setLoginUser] = useContext(UserContext)
    const [newUser,setNewUser]= useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photoURL: "",
        error:"",
        success:false,
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
    var Googleprovider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(Googleprovider).then(function(result) {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email}
        setLoginUser(signedInUser);
        history.replace(from);

        }).catch(function(error) {
        var errorMessage = error.message;
            console.log(errorMessage)
            var email = error.email;
            console.log(email);
        });
    
    }

    const handleFbSignIn = () => {
        var Fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(Fbprovider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoginUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            
            var errorMessage = error.message;
                 console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
                console.log(email);
            
          });

    }

    const handleBlur = (e) => {
  
        let isFromValid;
        if (e.target.name === "email") {
          isFromValid = /\S+@\S+\.\S+/.test(e.target.value)
    
        }
        if (e.target.name === "name") {
            isFromValid = e.target.value.length < 15
          }
       
        if (e.target.name === "password") {
           const passwordValidation = e.target.value.length > 6
           const passwordHasNumber = /\d{1}/.test(e.target.value)
           isFromValid = passwordValidation && passwordHasNumber;
        }
        if (isFromValid) {
          const userInfo = { ...user }
          userInfo[e.target.name] = e.target.value;
          setUser(userInfo)
    
        }
      }
    
      const handleSubmit = (e) => {
        
          if(newUser && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res =>{
            const newUserInfo={ ...user}
              newUserInfo.error='';
              newUserInfo.success=true;
              setUser(newUserInfo)
              updateUserName(user.name);
          })
          .catch(error => {
                 const newUserInfo={ ...user}
                 newUserInfo.error=error.message;
                 newUserInfo.success=false;
                   setUser(newUserInfo)
               
               });
    
          }
         if(!newUser && user.email && user.password){
           firebase.auth().signInWithEmailAndPassword(user.email,user.password)
          .then(res =>{
            const newUserInfo={ ...user}
              newUserInfo.error='';
              newUserInfo.success=true;
              setUser(newUserInfo)
              setLoginUser(newUserInfo);
              history.replace(from)
           
          })
          .catch(error => {
                 const newUserInfo={ ...user}
                 newUserInfo.error=error.message;
                 newUserInfo.success=false;
                   setUser(newUserInfo)
               
               });
         
         }
          e.preventDefault();
        }
        const updateUserName= name =>{
         const user = firebase.auth().currentUser;
    
           user.updateProfile({
            displayName:name
        
        }).then(function(){
           console.log("user name update successfully");
         }).catch(function (error) {
           console.log(error);
         })
        } 
    return (
       <div class="container">
            
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div className="from">
                <form onSubmit={handleSubmit} >
                   
                    {newUser && <h3>Create an account</h3>}
                    <br/>
                    {!newUser && <h3>Login</h3>}
                    <br/>
                  
                    <br/>
                    { newUser &&<input type="text" class="form-control" onBlur={handleBlur} placeholder="Your Name"/>}
                    <br/>
                    <input type="email" name="email" class="form-control" onBlur={handleBlur} placeholder="Your Email" required/>
                    <br/>
                    <input type="password" name="password" class="form-control" id="" onBlur={handleBlur} placeholder="Password" required/>
                    <br/>
                    <br/>
                    {!newUser && <input type="checkbox" name="" id=""/>} {!newUser &&<label htmlFor="">Remember me</label>} {!newUser && <span style={{marginLeft:"40%",color:"orange"}}>Forgotten password</span>} <br/>
                    
                     { !newUser && < button class="btn btn-warning input-button" >Login</button>}
                    {newUser &&   <button class="btn btn-warning input-button" >Create an account </button>  }
                 </form>
                 <div className="text-center">
                     {!newUser &&  <span style={{marginRight:"8px",fontSize:"20px"}}>Don't have an account?</span>}
                     {newUser && <span style={{marginRight:"8px" ,fontSize:"20px"}}>Already have an account</span>}

                 <input class="checkbox" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" /> 
                     {newUser &&  <label htmlFor="newUser" class="text-primary">Login</label>  }  
                    {!newUser &&  <label htmlFor="newUser" class="text-warning"> Create an account </label>}
                    </div>
                     <h3 style={{ color: "red" }}>{user.error}</h3>
                     {user.success && <h3 style={{ color: "green" }}> User {newUser ? "created" : "logged In"}  successfully</h3>}
                 </div>
                 <br/><br/>


                <h4 class="text-center"> Or another Login</h4>
                <br/>
                <button onClick={handleGoogleSignIn} class="btn btn-lg btn-block login-btn"> <img className="login-img" src={fb} alt=""/> Continue With Google</button>
                 <br/>
                 <button onClick={handleFbSignIn} class="btn btn-lg btn-block login-btn"> <img className="login-img"  src={google} alt=""/> Continue With Facebook</button>
                </div>
                 <div className="col-md-3"></div>
            </div>
            </div>

    
    );
};

export default Login;

