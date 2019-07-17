import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const publicActions = (provider, actions) =>
  actions.reduce(
    (methods, methodName) => ({
      ...methods,
      [methodName]: provider[methodName],
    }),
    {}
  );

const actions = ['setJWT'];

class Provider extends React.Component {
  state = {
    jwt: '',
  };

  setJWT = jwt => this.setState({ jwt });

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{ ...this.state, ...publicActions(this, actions) }}
      >
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Context = createContext({});
export default Provider;
