import React from 'react';
import Navbar from '../../layout/client/Navbar';
import Footer from '../../layout/client/Footer';
import HeaderSection from '../../layout/client/HeaderSection';
import ContractReviewForm from '../../forms/ContractReviewForm';

const ContractReview = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeaderSection />
        <ContractReviewForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContractReview;
