import React from 'react';
import { useParams, Link } from 'react-router-dom';


const ExamList = () => {
  const { course_id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Хичээл {course_id} - Шалгалтын жагсаалт</h2>
      <ul className="bg-white shadow-md rounded p-4 space-y-4">
        {/* Replace this with actual data */}
        <li className="flex justify-between items-center">
          <span>Шалгалт 1</span>
          <Link to={`/exams/1`} className="text-blue-500 hover:underline">Дэлгэрэнгүй</Link>
        </li>
        {/* More items */}
      </ul>
      <Link to={`/courses/${course_id}/exams/add`} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded mt-4 inline-block">
        Шинэ шалгалт нэмэх
      </Link>
    </div>
  );
};

export default ExamList;
