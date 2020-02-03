import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './containers/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';
import Contact from './containers/Contact';
import Resume from './containers/Resume';
import NotFound from './containers/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
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
