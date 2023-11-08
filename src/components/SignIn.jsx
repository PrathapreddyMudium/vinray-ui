import React from 'react';
import Authentication from './Authentication';
import AppFooter from './footer';
import AppHeader from './header';
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