import React from 'react';
import AppFooter from '../footer';
import AppHeader from '../header';
import Authentication from './Authentication';
const SignIn = () => {
  return (
    <div className="App">
        <header id='header'>
        <AppHeader />
      </header>
      <main>
      <Authentication/>
      </main>      
     <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  )
}

export default SignIn;