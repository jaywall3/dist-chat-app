import React from "react";
import logo from '../img/logo.png';

const Homepage = ({ setScreen }) => {
    const Login = ()=> {
      setScreen('login');
    };
  
    
  
    return (
      <header className="Homepage">
          <img src={logo} className="Homepage-logo" alt="logo" />
          
          <p>
            Distributed Chat App (DCA) - built on FlureeDB
          </p>
  
          <div className="container">
            
            <div className="left">
            <button onClick={Login} class="dropdown-toggle">Login</button>
            </div>
            
            <div className="right">
              <a href="http://docs.flur.ee" ><button>Fluree Docs</button></a>
            </div>
          </div>
        </header>
    )
  }

  export default  Homepage