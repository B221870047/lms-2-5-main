import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ExamDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шалгалтын мэдээлэл - ID: {id}</h2>
      <p>Шалгалтын нэр: Шалгалт {id}</p>
      <p>Тайлбар: Шалгалтын тайлбар</p>
      <div className="flex space-x-4 mt-4">
        <Link to={`/exams/${id}/edit`} className="text-white bg-yellow-500 hover:bg-yellow-600 p-2 rounded">
          Засах
        </Link>
        <Link to={`/exams/${id}/report`} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded">
          Тайлан харах
        </Link>
      </div>
    </div>
  );
};

export default ExamDetail;
