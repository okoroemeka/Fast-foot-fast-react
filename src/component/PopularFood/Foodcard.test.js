import React from 'react';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';
import FoodCardAreaHeader from './FoodCardAreaHeader';
import FoodCard from './FoodCard';



afterEach(cleanup);

describe('<FoodCardAreaHeader />', () => {
  test('render correctly', () => {
    const  foodCardAreaHeader  = render(<FoodCardAreaHeader />);
    expect(foodCardAreaHeader).toMatchSnapshot();
  });
});

describe('<FoodCard />', () => {
  test('render correctly', () => {
    const  foodCard  = render(<FoodCard />);
    expect(foodCard).toMatchSnapshot();
  });
});