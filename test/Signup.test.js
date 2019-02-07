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
import reducers from '../reducers';
import SignUp from '../src/component/SignUp/SignUp';
import axiosInstance from '../apis/GetFood';
// import { gmail } from 'cluster';

const axiosMock = new MockAdapter(axiosInstance, { delayResponse: 500 });
const store = createStore(reducers, applyMiddleware(thunk));
const renderWithRedux = (ui, reduxStore) => ({
  ...render(<Provider store={reduxStore}>{ui}</Provider>),
  store,
});
const history = createMemoryHistory({ initialEntries: ['/'] });
history.push = jest.fn();

const fillSubmitForm = (
  fullnameField,
  emailField,
  passwordField,
  confirmPasswordField, submitButton,
) => {
  fireEvent.change(fullnameField, { target: { value: 'okoro nneemka' } });
  fireEvent.change(emailField, {target: {value : 'okoro@gmail.com'}});
  fireEvent.change(passwordField, { target: { value: 'Secret12@' } });
  fireEvent.change(confirmPasswordField, { target: { value: 'Secret12@' } });
  fireEvent.submit(submitButton);
};

describe('SignupForm', () => {
  let fullnameField;
  let emailField;
  let passwordField;
  let confirmPasswordField;
  let submitButton;
  let signupComponent;

  const props = {
    isLoggedIn: true,
    history,
    signupUser: jest.fn()
  }

  beforeEach(() => {
    const ui = <Router history={history}><SignUp  {...props} /></Router>;
    signupComponent = renderWithRedux(ui, store);
    fullnameField = signupComponent.getByLabelText('Full name');
    emailField = signupComponent.getByLabelText('Email');
    passwordField = signupComponent.getByLabelText('Password');
    confirmPasswordField = signupComponent.getByLabelText('Confirm Password');
    submitButton = signupComponent.container.querySelector('button[type=submit]');
  });
  afterEach(() => {
    history.push.mockReset();
    axiosMock.reset();
  });

  test('it renders all form inputs', () => {
    expect(fullnameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
    expect(submitButton.textContent).toBe('Sign up');
  });

  test('fill and submit form with success', async () => {
    await axiosMock
      .onPost()
      .replyOnce(201, { message: 'Signup successfully' });

    fillSubmitForm(fullnameField, emailField, passwordField, confirmPasswordField, submitButton);
    await wait(() => expect(history.push).toHaveBeenCalledTimes(1));
    expect(history.push).toHaveBeenCalledTimes(1);
  });
});

// import React from 'react';
// import 'react-testing-library/cleanup-after-each';
// import 'jest-dom/extend-expect';
// import {Router} from 'react-router-dom'
// import {createMemoryHistory} from 'history'
// import { render, cleanup } from 'react-testing-library';
// import SignUp from './SignUp';


// afterEach(cleanup);

// describe('<SignUp />', () => {
//   const history = createMemoryHistory({initialEntries: ['/']})
//   test('render correctly', () => {
//     const  signUp  = render(
//       <Router history={history}>
//         <SignUp />
//       </Router>
//       );
//     expect(signUp).toMatchSnapshot();
//   });
// });