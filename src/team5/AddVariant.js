import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddVariant = () => {
  const { exam_id } = useParams();
  const [variantName, setVariantName] = useState('');
  const navigate = useNavigate();

  const handleAddVariant = () => {
    alert(`Вариант нэмэгдлээ: ${variantName}`);
    navigate(`/exams/${exam_id}/variants`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Шинэ Вариант нэмэх - Шалгалт {exam_id}</h2>
      <input
        type="text"
        placeholder="Вариантын нэр"
        value={variantName}
        onChange={(e) => setVariantName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={handleAddVariant} className="text-white bg-green-500 hover:bg-green-600 p-2 rounded">
        Нэмэх
      </button>
    </div>
  );
};

export default AddVariant;
