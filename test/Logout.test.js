import React from 'react';
import { render, cleanup } from 'react-testing-library';
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history'
import { createStore, applyMiddleware } from 'redux';
import 'jest-dom/extend-expect';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import Logout  from '../src/component/Logout/Logout';

const store = createStore(reducers, applyMiddleware(thunk));
const renderWithRedux = (ui, reduxStore) => ({
  ...render(<Provider store={reduxStore}>{ui}</Provider>),
  store,
});

afterEach(cleanup);

describe('<Logout />', () => {
  const props = {
    isLoggedIn: true,
  };
  const history = createMemoryHistory({initialEntries: ['/']});
  test('should render correctly', () => {
    const ui = <Router history={history}><Logout  {...props} /></Router>;
    const { getByText }  = renderWithRedux(ui, store);
    expect(getByText('Logout')).toBeInTheDocument();
  });
});
