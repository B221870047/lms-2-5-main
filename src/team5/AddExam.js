import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddExam = () => {
  const { course_id } = useParams();
  const [examName, setExamName] = useState('');
  const navigate = useNavigate();

  const handleAddExam = () => {
    alert(`Шалгалт нэмэгдлээ: ${examName}`);
    navigate(`/courses/${course_id}/exams`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шинэ шалгалт нэмэх - Хичээл {course_id}</h2>
      <input
        type="text"
        placeholder="Шалгалтын нэр"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleAddExam} className="text-white bg-green-500 hover:bg-green-600 p-2 rounded">
        Нэмэх
      </button>
    </div>
  );
};

export default AddExam;
