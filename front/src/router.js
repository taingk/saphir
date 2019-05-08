import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Wysiwyg from './components/Wysiwyg';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles/new">New article</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={App} />
      <Route path="/articles/new" component={Wysiwyg} />
    </div>
  </Router>
);

export default AppRouter;
