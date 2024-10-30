import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExamList from './ExamList';
import AddExam from './AddExam';
import ExamDetail from './ExamDetail';
import EditExam from './EditExam';
import ExamReport from './ExamReport';
import VariantList from './VariantList';
import AddVariant from './AddVariant';
import VariantDetail from './VariantDetail';
import EditVariant from './EditVariant';
import Team5Home from './Team5Home'; 

const Team5 = () => {
  return (
    <Routes>
      <Route path="/" element={<Team5Home />} /> {/* Set the home component */}
      <Route path="courses/:course_id/exams" element={<ExamList />} />
      <Route path="courses/:course_id/exams/add" element={<AddExam />} />
      <Route path="exams/:id" element={<ExamDetail />} />
      <Route path="exams/:id/edit" element={<EditExam />} />
      <Route path="exams/:id/report" element={<ExamReport />} />
      <Route path="exams/:exam_id/variants" element={<VariantList />} />
      <Route path="exams/:exam_id/variants/add" element={<AddVariant />} />
      <Route path="exams/:exam_id/variants/:id" element={<VariantDetail />} />
      <Route path="exams/:exam_id/variants/:id/edit" element={<EditVariant />} />
    </Routes>
  );
};

export default Team5;
