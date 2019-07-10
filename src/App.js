import React,{ useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';

const App = () => {
  const [screen, setScreen] = useState('homepage')

  return (
    <div className="App">
      {screen === 'homepage' && <Homepage setScreen={setScreen} />}
      {screen === 'login' && <Login />}
      
    </div>
  );
}

export default App;
