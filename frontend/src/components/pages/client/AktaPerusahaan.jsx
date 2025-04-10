import React from 'react';
import HeaderSection from '../../layout/client/HeaderSection';
import CardOption from '../../layout/client/CardOption';
import Navbar from '../../layout/client/Navbar';
import Footer from '../../layout/client/Footer';

const AktaPerusahaan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeaderSection />
        <CardOption />
      </div>
      <Footer />
    </div>
  );
};

export default AktaPerusahaan;
