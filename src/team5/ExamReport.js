import React from 'react';
import { useParams } from 'react-router-dom';

const ExamReport = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шалгалтын тайлан - ID: {id}</h2>
      <p>Энэ бол шалгалтын тайлангийн дэлгэрэнгүй мэдээлэл байна.</p>
      {/* Include report details here */}
    </div>
  );
};

export default ExamReport;
