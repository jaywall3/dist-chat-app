import React from "react";
import logo from '../img/logo.svg';

const Homepage = ({ setScreen }) => {
    const Login = ()=> {
      setScreen('login');
    };

    const NewAccount = () => {
      setScreen('newAccount')
    }
     
    return (
      <header className="Homepage">
          <img src={logo} className="Homepage-logo" alt="logo" />
          
          <p>
            Distributed Chat App (DCA) - built on FlureeDB
          </p>
          <div className="new">
          <button onClick={NewAccount} >Create New Account</button>
          </div>
          <br></br>
          <div className="container">
            
            <div className="left">
            <button onClick={Login} >Login</button>
            </div>
            
            <div className="right">
              <a href="http://docs.flur.ee" ><button>docs.flur.ee</button></a>
            </div>
          </div>
        </header>
    )
  }

  export default  Homepage