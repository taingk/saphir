import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grommet, Button, Heading } from 'grommet';
import * as serviceWorker from './serviceWorker';
import { Edit } from 'grommet-icons';

import Provider from './components/Provider';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Articles from './pages/article';
import ShowArticle from './pages/article/show';
import NewArticle from './pages/article/new';
import EditArticle from './pages/article/edit';
import Login from './pages/auth/login';
import Logout from './pages/auth/logout';
import isConnected from './utils/isConnected';
import NewUser from './pages/user/new';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
    focus: {
      border: {
        color: 'white',
      },
    },
  },
  button: {
    primary: {
      color: 'white',
    },
    border: {
      color: 'white',
    },
  },
};

const AppRouter = () => (
  <Router>
    <Grommet theme={theme} full>
      <Nav>
        <Link to="/">
          <Heading level="3" margin="none" color="white">
            Saphir
          </Heading>
        </Link>
        <Link to={isConnected() ? '/logout' : '/login'}>
          <Button label={isConnected() ? 'Logout' : 'Login'} primary />
        </Link>
        {!isConnected() && (
          <Link to="/new/user">
            <Button label="S'inscrire" />
          </Link>
        )}
        <Link to="/new/article">
          <Button icon={<Edit />} label="Ecrire un article" primary />
        </Link>
      </Nav>
      <Route path="/" exact component={Articles} />
      <Route path="/show/article/:id" component={ShowArticle} />
      <Route path="/new/article" component={NewArticle} />
      <Route path="/edit/article/:id" component={EditArticle} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/new/user" exact component={NewUser} />
    </Grommet>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
