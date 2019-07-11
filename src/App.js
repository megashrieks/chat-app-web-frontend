import React from 'react';
import AppBody from './components/AppBody'
import './components/library/global.css';
import { LoginProvider } from './components/contexts/LoginContext';
function App() {
  return (
    <div className="App">
		  <div className="centered">
			  <LoginProvider>
				  <AppBody />
			  </LoginProvider>
		</div>
    </div>
  );
}

export default App;
