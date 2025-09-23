import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ComingSoon from './comingsoon'

const Consultants = () => {
  return (
    <div>
      {/* Nested Routes */}
      <Routes>
        <Route index element={<Navigate to="forstudents" replace />} />
        <Route path="forstudents" element={<EduventuresForStudents />} />
        <Route path="foruniversities" element={<EduventuresForUniversities />} />
      </Routes>
    </div>
  )
}

export default Consultants
