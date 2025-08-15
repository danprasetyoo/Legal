import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from '../pages/AdminPage';
import Home from '../pages/client/Home';
import AktaPerusahaan from '../pages/client/AktaPerusahaan';
import AsetPerusahaan from '../pages/client/AsetPerusahaan';
import SOPLegal from '../pages/client/SOPLegal';
import ProfilLegal from '../pages/client/ProfilLegal';
import LegalOpinion from '../pages/client/LegalOpinion';
import ContractReview from '../pages/client/ContractReview';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/akta-perusahaan" element={<AktaPerusahaan />} />
        <Route path="/aset-perusahaan" element={<AsetPerusahaan />} />
        <Route path="/sk-sop-legal" element={<SOPLegal />} />
        <Route path="/profil-legal" element={<ProfilLegal />} />
        <Route path="/legal-opinion" element={<LegalOpinion />} />
        <Route path="/contract-review" element={<ContractReview />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
