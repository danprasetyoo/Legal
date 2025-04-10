import React from 'react';
import Navbar from '../../layout/client/Navbar';
import HeroSection from '../../layout/client/HeroSection';
import MenuSection from '../../layout/client/MenuSection';
import FeatureSection from '../../layout/client/FeatureSection';
import Example from '../../layout/client/Example';
import Footer from '../../layout/client/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <FeatureSection />
      <Example />
      <Footer />
    </div>
  );
};

export default Home;
