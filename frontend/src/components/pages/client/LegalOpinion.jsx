import React from 'react';
import Navbar from '../../layout/client/Navbar';
import Footer from '../../layout/client/Footer';
import HeaderSection from '../../layout/client/HeaderSection';
import LegalOpinionForm from '../../forms/LegalOpinionForm';

const LegalOpinion = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeaderSection />
        <LegalOpinionForm />
      </div>
      <Footer />
    </div>
  );
};

export default LegalOpinion;
