import React from 'react';
import { useParams, Link } from 'react-router-dom';

const VariantDetail = () => {
  const { exam_id, id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Вариант - Шалгалт {exam_id}, Вариант {id}</h2>
      <p>Энэ бол шалгалтын вариантын дэлгэрэнгүй мэдээлэл байна.</p>
      <Link to={`/exams/${exam_id}/variants/${id}/edit`} className="text-white bg-yellow-500 hover:bg-yellow-600 p-2 rounded">
        Засах
      </Link>
    </div>
  );
};

export default VariantDetail;
