import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditVariant = () => {
  const { exam_id, id } = useParams();
  const [variantName, setVariantName] = useState('Вариант ' + id);
  const navigate = useNavigate();

  const handleEditVariant = () => {
    alert(`Вариант засагдлаа: ${variantName}`);
    navigate(`/exams/${exam_id}/variants/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Вариант засах - ID: {id}</h2>
      <input
        type="text"
        value={variantName}
        onChange={(e) => setVariantName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleEditVariant} className="text-white bg-green-500 hover:bg-green-600 p-2 rounded">
        Хадгалах
      </button>
    </div>
  );
};

export default EditVariant;
