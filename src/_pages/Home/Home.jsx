import React, { useState } from 'react';

import AboutComponent from './AboutComponent';
import HomeComponent from './HomeComponent';
import PopularHomeComponent from './PopularHomeComponent';
import HomeOptionsComponent from './HomeOptionsComponent';
import { useSelector } from 'react-redux';

const Home = () => {
  const { items } = useSelector((state) => state.items);
  return (
    <div className="home_page">
      <HomeComponent />
      <AboutComponent />
      <PopularHomeComponent items={items} />
      <HomeOptionsComponent />
    </div>
  );
};

export default Home;
