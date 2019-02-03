import React from 'react';
import { createMemoryHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import {
  render, fireEvent, wait,
} from 'react-testing-library';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import reducers from '../../../reducers';
import Signin from './Signin';
import axiosInstance from '../../../apis/GetFood';

const axiosMock = new MockAdapter(axiosInstance, { delayResponse: 500 });
const store = createStore(reducers, applyMiddleware(thunk));
const renderWithRedux = (ui, reduxStore) => ({
  ...render(<Provider store={reduxStore}>{ui}</Provider>),
  store,
});
const history = createMemoryHistory({ initialEntries: ['/'] });
history.push = jest.fn();

const fillSubmitForm = (
  emailField,
  passwordField,
  submitButton,
) => {
  fireEvent.change(emailField, {target: {value : 'okoro@gmail.com'}});
  fireEvent.change(passwordField, { target: { value: 'Secret12@' } });
  fireEvent.submit(submitButton);
};

describe('SignInForm', () => {
  let emailField;
  let passwordField;
  let submitButton;
  let signInComponent;

  const props = {
    history,
    logInUser: jest.fn()
  }

  beforeEach(() => {
    const ui = <Router history={history}><Signin  {...props} /></Router>;
    signInComponent = renderWithRedux(ui, store);
    emailField = signInComponent.getByLabelText('Email');
    passwordField = signInComponent.getByLabelText('Password');
    submitButton = signInComponent.container.querySelector('button[type=submit]');
  });
  afterEach(() => {
    history.push.mockReset();
    axiosMock.reset();
  });

  test('it renders all form inputs', () => {
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton.textContent).toBe('Log in');
  });

  test('fill and submit form with success', async () => {
    await axiosMock
      .onPost()
      .replyOnce(201, { message: 'SignIn successfully' });

    fillSubmitForm( emailField, passwordField, submitButton);
    await wait(() => expect(history.push).toHaveBeenCalledTimes(1));
    expect(history.push).toHaveBeenCalledTimes(1);
  });
});