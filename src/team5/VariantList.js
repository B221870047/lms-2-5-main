import React from 'react';
import { useParams, Link } from 'react-router-dom';

const VariantList = () => {
  const { exam_id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шалгалтын Вариант - Шалгалт {exam_id}</h2>
      <ul className="bg-white shadow-md rounded p-4 space-y-4">
        <li className="flex justify-between items-center">
          <span>Вариант 1</span>
          <Link to={`/exams/${exam_id}/variants/1`} className="text-blue-500 hover:underline">Дэлгэрэнгүй</Link>
        </li>
      </ul>
      <Link to={`/exams/${exam_id}/variants/add`} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded mt-4 inline-block">
        Вариант нэмэх
      </Link>
    </div>
  );
};

export default VariantList;
