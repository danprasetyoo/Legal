import React, { useState, useEffect } from 'react';
import HeaderSection from '../../layout/client/HeaderSection';
import CardOption from '../../layout/client/CardOption';
import Navbar from '../../layout/client/Navbar';
import Footer from '../../layout/client/Footer';
import api from '../../utils/api';

const AktaPerusahaan = () => {
  const [headerContent, setHeaderContent] = useState({});
  const [cardContent, setCardContent] = useState([]);
  const [legalOpinions, setLegalOpinions] = useState([]);
  const [contractReviews, setContractReviews] = useState([]);

  useEffect(() => {
    fetchContent();
    fetchLegalOpinions();
    fetchContractReviews();
  }, []);

  const fetchContent = async () => {
    try {
      const headerResponse = await api.get(
        '/content?page=akta-perusahaan-header'
      );
      const cardResponse = await api.get('/content?page=akta-perusahaan-cards');
      setHeaderContent(headerResponse.data[0] || {});
      setCardContent(cardResponse.data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const fetchLegalOpinions = async () => {
    try {
      const response = await api.get('/legal-opinions');
      setLegalOpinions(response.data || []);
    } catch (error) {
      console.error('Error fetching legal opinions:', error);
    }
  };

  const fetchContractReviews = async () => {
    try {
      const response = await api.get('/contract-reviews');
      setContractReviews(response.data || []);
    } catch (error) {
      console.error('Error fetching contract reviews:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeaderSection
          title={headerContent.title}
          description={headerContent.body}
        />
        <CardOption cards={cardContent} />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Legal Opinions</h2>
          <ul>
            {legalOpinions.map((opinion) => (
              <li key={opinion.id} className="mb-2">
                <strong>{opinion.name}</strong>: {opinion.issueTitle}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contract Reviews</h2>
          <ul>
            {contractReviews.map((review) => (
              <li key={review.id} className="mb-2">
                <strong>{review.name}</strong>: {review.documentName}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AktaPerusahaan;
