import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Team5Home = () => {
  const { course_id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Шалгалтын систем</h1>
      

      <div className="flex flex-col space-y-4">
        <Link 
          to={`/courses/${course_id}/exams`} 
          className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded">
          Шалгалтын жагсаалт
        </Link>
        <Link 
          to={`/courses/${course_id}/exams/add`} 
          className="text-white bg-green-500 hover:bg-green-600 p-2 rounded">
          Шинэ шалгалт нэмэх
        </Link>
        <Link 
          to={`/team5/exams`} 
          className="text-white bg-yellow-500 hover:bg-yellow-600 p-2 rounded">
          Бусад шалгалтууд
        </Link>
      </div>
    </div>
  );
};

export default Team5Home;
