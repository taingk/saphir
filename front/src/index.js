import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Articles from './pages/article';
import ShowArticle from './pages/article/show';
import NewArticle from './pages/article/new';
import EditArticle from './pages/article/edit';

const AppRouter = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/new/article">New article</Link>
        </li>
      </ul>
    </nav>
    <Route path="/" exact component={Articles} />
    <Route path="/show/article/:id" component={ShowArticle} />
    <Route path="/new/article" component={NewArticle} />
    <Route path="/edit/article/:id" component={EditArticle} />
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
