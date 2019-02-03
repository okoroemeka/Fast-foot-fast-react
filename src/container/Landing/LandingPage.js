import React from 'react';
import Banner from '../../component/Banner/Banner';
import FoodCardAreaHeader from '../../component/PopularFood/FoodCardAreaHeader';
import CardWrapper from '../Utility/CardWrapperConnect';
import NavigationBar from '../../component/NavBar/NavigationLandingPage';
import './Style.css'

const LandingPage = () => {
  return (
  <div>
    <NavigationBar />
    <Banner />
    <FoodCardAreaHeader />
    <CardWrapper />
  </div>
  );
};
 
export default LandingPage;