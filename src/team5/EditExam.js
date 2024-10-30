import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditExam = () => {
  const { id } = useParams();
  const [examName, setExamName] = useState('Шалгалт ' + id);
  const navigate = useNavigate();

  const handleEditExam = () => {
    alert(`Шалгалт засагдлаа: ${examName}`);
    navigate(`/exams/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шалгалтыг засах - ID: {id}</h2>
      <input
        type="text"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleEditExam} className="text-white bg-green-500 hover:bg-green-600 p-2 rounded">
        Хадгалах
      </button>
    </div>
  );
};

export default EditExam;
