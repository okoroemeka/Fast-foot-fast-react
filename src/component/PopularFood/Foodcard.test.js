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
    // expect(getByText('Complete Order')).toBeInTheDocument();
    // expect(getByText('City')).toBeInTheDocument();
    // expect(getByText('Address')).toBeInTheDocument();
    // expect(getByText('Telephone')).toBeInTheDocument();
    // expect(getByText('Complete')).toBeInTheDocument();
  });
});

describe('<FoodCard />', () => {
  test('render correctly', () => {
    const  foodCard  = render(<FoodCard />);
    expect(foodCard).toMatchSnapshot();
    // expect(getByText('Complete Order')).toBeInTheDocument();
    // expect(getByText('City')).toBeInTheDocument();
    // expect(getByText('Address')).toBeInTheDocument();
    // expect(getByText('Telephone')).toBeInTheDocument();
    // expect(getByText('Complete')).toBeInTheDocument();
  });
});