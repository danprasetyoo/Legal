import React from 'react';
import HeaderSection from '../../layout/client/HeaderSection';
import FeatureSection from '../../layout/client/FeatureSection';
import Navbar from '../../layout/client/Navbar';
import Footer from '../../layout/client/Footer';

const SOPLegal = () => {
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

export default SOPLegal;
