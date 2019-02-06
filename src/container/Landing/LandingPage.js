import React from 'react';
import Banner from '../../component/Banner/Banner';
import FoodCardAreaHeader from '../../component/PopularFood/FoodCardAreaHeader';
import CardWrapper from '../Utility/CardWrapperConnect';
import './Style.css'

const LandingPage = () => {
  return (
  <div>
    <Banner />
    <FoodCardAreaHeader />
    <CardWrapper />
  </div>
  );
};
 
export default LandingPage;