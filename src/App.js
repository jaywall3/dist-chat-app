import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import NewAccount from './components/NewAcount';

const App = () => {
  const [screen, setScreen] = useState('homepage')

  return (
    <div className="App">
      {screen === 'homepage' && <Homepage setScreen={setScreen} />}
      {screen === 'login' && <Login />}
      {screen === 'newaccount' && <NewAccount />}

    </div>
  );
}

export default App;
