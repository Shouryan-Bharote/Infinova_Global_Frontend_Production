import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EduventuresNavbar from '../components/EduventuresNavbar';
import EduventuresForStudents from './pages/EduventuresForStudents';
import EduventuresForUniversities from './pages/EduventuresForUniversities';
import Footer from '../components/Footer';

const Eduventures = () => {
  return (
    <>
      {/* Always show Navbar */}
      <EduventuresNavbar />

      {/* Nested Routes */}
      <Routes>
        <Route index element={<Navigate to="forstudents" replace />} />
        <Route path="forstudents" element={<EduventuresForStudents />} />
        <Route path="foruniversities" element={<EduventuresForUniversities />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Eduventures;
