import React from 'react';
import Hero from '../Components/Hero';
import HomeAbout from '../Components/HomeAbout';
import CallToAction from '../Components/CallToAction';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <HomeAbout />
      <CallToAction />
    </div>
  );
};

export default Home;
