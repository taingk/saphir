import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages';
import Articles from './pages/articles';
import ShowArticle from './pages/showArticle';
import NewArticle from './pages/newArticle';
import EditArticle from './pages/editArticle';
import DeleteArticle from './pages/deleteArticle';

const AppRouter = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/new/article">New article</Link>
        </li>
      </ul>
    </nav>
    <Route path="/" exact component={Home} />
    <Route path="/articles" component={Articles} />
    <Route path="/show/article/:id" component={ShowArticle} />
    <Route path="/new/article" component={NewArticle} />
    <Route path="/edit/article/:id" component={EditArticle} />
    <Route path="/delete/article/:id" component={DeleteArticle} />
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
