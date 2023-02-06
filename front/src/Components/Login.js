import React,{useState} from "react"
import {useEffect} from "react";
import {Navlink,useNavigate} from "react-router-dom"
import logo from '../logo.svg';
import anotheron from '../index.svg';
import axios from "axios";
import { redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import Signup from "./Signup";
import { Navigate } from "react-router-dom";





const Login =()=> {
  const navigate = useNavigate();
  const[logincheck,setcheck]=useState({
    data:null,error:""
  });
  const[user,setuser]=useState({
    email:"",password:""
  });
  const [message, setmessage] = useState({
    message:""
  });
  let name,value;
  const handleinputs= async(e)=>{
    name=e.target.name
    value=e.target.value
    setuser({... user,[name]:value});
   
  } 

   const PostData= async(e)=>{
    e.preventDefault();
    
    
    const{email,password}=user;
   const res= await fetch("/Logine",{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify({
     email,password
   })
   
  
    })    
   
    try {
      const data= await res.json();
      
      if(res.status==422){
      setcheck({error:"incorrect credentials"});
      }
      else{
        setcheck({data});
      }
    } catch (error) {
    // setcheck({ da});
    }
   
   

 

   } 

   


console.log(message.message)


let { data, error } = logincheck;
    return (
        <>
        
       <section className="Sigup">
       <div className="container mt-5">
       {error!="" && <p  style={{color:'red'}}>{error}</p>}
        {data && (navigate("/Home",{state: { email:data.email , password: data.password }})
          // <Navigate to="/Home" replace={true} /> 
        )}
        
<form>

  <div class="form-outline mb-1">
    <input type="email" id="form2Example1" class="form-control" value={user.email} name="email" onChange={handleinputs} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" value={user.password} name="password" onChange={handleinputs} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <div class="col-md-5 text-center">
  


     </div> */}
 
  <div class="text-center">
  <Link to="/Home">
  <button type="button" class="btn btn-primary btn-block btn-sm" onClick={PostData}>Sign in</button>
  </Link>
    <p>Not a member? <Link to="/Signup">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-facebook"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-github"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-google"></i>
    </button>
  </div>
</form>
</div>
</section>
</>
)

}


export default Login;