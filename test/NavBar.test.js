import React from 'react';
import { render, cleanup } from 'react-testing-library';
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history'
import { createStore, applyMiddleware } from 'redux';
import 'jest-dom/extend-expect';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import NavigationBar  from '../src/component/NavBar/NavigationLandingPage';

const store = createStore(reducers, applyMiddleware(thunk));
const renderWithRedux = (ui, reduxStore) => ({
  ...render(<Provider store={reduxStore}>{ui}</Provider>),
  store,
});

afterEach(cleanup);

describe('<NavigationBar />', () => {
  const props = {
    cart: [{}],
    isLoggedIn: true,
  };
  const history = createMemoryHistory({initialEntries: ['/']});
  test('should render correctly', () => {
    const ui = <Router history={history}><NavigationBar  {...props} /></Router>;
    const { getByText }  = renderWithRedux(ui, store);
    expect(getByText('login')).toBeInTheDocument();
    expect(getByText('signup')).toBeInTheDocument();
  });
});
