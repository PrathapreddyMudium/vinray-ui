import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppAbout from './components/about';
import AppPricing from './components/careers';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppServices from './components/services';
import AppTeams from './components/teams';
import AppWorks from './components/works';

function App() {
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
  );
}

export default App;
