import React from 'react';
import Navbar from '../../layout/client/Navbar';
import HeaderSection from '../../layout/client/HeaderSection';
import FeatureSection from '../../layout/client/FeatureSection';
import Footer from '../../layout/client/Footer';

const ProfilLegal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeaderSection />
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilLegal;
