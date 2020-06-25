import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './containers/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

import Contact from './containers/Contact';
import Resume from './containers/Resume';
import NotFound from './containers/NotFound';

import './App.scss';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  console.log(showScroll)
  const logit = () => {
    console.log(window.pageYOffset)
    window.pageYOffset >= 150 ? setShowScroll(true) : setShowScroll(false);
  }
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });
  return (
    <Router>
      <div className='App'>
        {showScroll && <ScrollTop />}
        <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
