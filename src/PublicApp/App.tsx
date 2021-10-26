import React from 'react'
import './App.css';
import {ReactComponent as ReactLogo} from '../assets/imgs/tibi-logo.svg'

function App() {
  return (
    <div className="App">

      <ReactLogo id='welcome-logo' />


      <ul>
        <li><a href="/users/u-1234">Tip User (1234)</a></li>
      </ul>
    </div>
  );
}

export default App;
