import React from 'react'
import './App.css';
import {ReactComponent as ReactLogo} from '../assets/imgs/tibi-logo.svg'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">

      <ReactLogo id='welcome-logo' />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
