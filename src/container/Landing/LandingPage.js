import React from 'react';
import Banner from '../../component/Banner/Banner';
import FoodCardAreaHeader from '../../component/PopularFood/FoodCardAreaHeader';
import CardWrapper from '../../container/Utility/CardWrapper';
import NavigationBar from '../../component/NavBar/NavigationLandingPage';
import Footer from '../../container/Footer';
import './Landing.css'

const LandingPage = () => {
  return (
  <div>
    <NavigationBar />
    <Banner />
    <FoodCardAreaHeader />
    <CardWrapper />
    <Footer />
  </div>
  );
};
 
export default LandingPage;