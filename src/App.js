import React from 'react';
// Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav';
// Pages
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import OurWorkPage from './pages/OurWorkPage';
import MovieDetails from './pages/MovieDetails';
//Router
// React router cherche tout les url qui match
// Switch permet d'arreter le render dès qu'une url est trouvé
import {Switch,Route,useLocation} from 'react-router-dom';
// Animation
// Detecte les exits pour animation
import {AnimatePresence} from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUsPage />
          </Route>
          <Route path="/work" exact>
            <OurWorkPage/>
          </Route>
          <Route path="/work/:id">
            <MovieDetails/>
          </Route>

          <Route path="/contact" exact>
            <ContactUsPage/>
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
