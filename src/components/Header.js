import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

const Header = () => {
    return (
        <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Somer Jackson</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default Header;