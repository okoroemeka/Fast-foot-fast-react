import React from 'react';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import { render, cleanup } from 'react-testing-library';
import Banner from '../src/component/Banner/Banner';


afterEach(cleanup);

describe('<Banner />', () => {
  const history = createMemoryHistory({initialEntries: ['/']})
  test('render correctly', () => {
    const  banner  = render(
      <Router history={history}>
        <Banner />
      </Router>,
    );
    expect(banner).toMatchSnapshot();
  });
});