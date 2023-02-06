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

import '../App.css';

const Signup =()=> {
  //  let navigate = useNavigate()
  // const history=useNavigate();
  // const [students, setStudents] = useState();
  // const response;

  // for sign up
  const[user,setuser]=useState({
    name:"",email:"",password:""
  });
  const [readuser, readsetUser] = useState([]);
  const{name1 ,email1}=user;
  let name2="musab"
//   useEffect(() => {
//     const res1=fetch("/all",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         name2
//       })
     
// // Displaying results to console

    
   
//       })
//        .
//        then(response => response.json())
 
//       // // Displaying results to console
//        .then(json => readsetUser(json));

  
//     }, []);

//      console.log(readuser);
//   const data = new FormData();
  

  // useEffect(() => {
  //   console.log("hello how are you");
  //   axios
  //     .get("http://localhost:5000/all",{
  //     params:  
  //     {     
  //         product:"musab",
  //         name: "musab"
  //       }
  //     })
  //     .then(({ data }) => {
  //       console.log(data);
  //       // setStudents(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // fetch("/register",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type":"application/json"
  //   },
  //   body:JSON.stringify({
  //     name,email
  //   })
    
 
  //   });
  

  // const dati am a woman
 
  
  let name,value;
  const handleinputs=(e)=>{
    name=e.target.name
    value=e.target.value
    setuser({... user,[name]:value});
   
  } 
   const PostData= async (e)=>{
    e.preventDefault();
    
    
    const{name,email,password}=user;
   const res = await fetch("/register",{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify({
     name,email,password
   })
   

   });
   const data= await res.json();
   if(data.status == 422 || !data){
console.log("invalid registration")
   }
   else{
console.log("Registration succesfull")
// const history=useNavigate();
    // redirect('/login')
  // history.push("/login")
}
   } 

    return (
      <>
  
<section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" name="name"value= {user.name} id="form3Example1c" class="form-control" onChange={handleinputs} />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" value={user.email} name="email" id="form3Example3c" class="form-control" onChange={handleinputs} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" value={user.password} name="password" id="form3Example4c" class="form-control" onChange={handleinputs} />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-1" type="checkbox" value="" id="form2Example3c" style={{float : 'right', right : '300px'}} />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={PostData}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={logo}
                  class="img-fluid" alt="Sample image"></img>

              </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       </>
    );
  }


export default Signup;