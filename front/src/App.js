import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import './App.css';
import Navbar from './Components/Navbar';
import SignupForm from './Components/Signup';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom";
import {S} from "react-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
   <>
   <Router>
     <Routes>

     <Route exact path='/Home' element={< Navbar />}></Route>
                 <Route exact path='/Signup' element={< Signup />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
 
          </Routes>
          </Router>
     {/* <Navbar/> */}
   
     {/* <Login/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  );
}

export default App;
