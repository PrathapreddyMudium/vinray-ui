import React from 'react';
import AppAbout from './about';
import AppPricing from './careers';
import AppContact from './contact';
import AppFooter from './footer';
import AppHeader from './header';
import AppHero from './hero';
import AppServices from './services';
import AppTeams from './teams';
import AppWorks from './works';


const Home = () => {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        {/*<AppTestimonials />*/}
        <AppPricing />
        {/*<AppBlog />*/}
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
      </div>
  )
}

export default Home;