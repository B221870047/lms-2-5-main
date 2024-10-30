import React from 'react';
import './Schools.css';
import { useNavigate } from 'react-router-dom';

// Static array of schools
const massive = [
  {
    name: "Шинжлэх ухаан технологийн их сургууль",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-fWyjZzryFYk4Yz0gtbVTrkKeh5AB_PCAA&s",
    approved_by: "Approver of MUST",
    approved_at: "Mongolia"
  },
  {
    name: "Монгол Улсын их сургууль",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A0aR4zEiWAVJw4slObYV_GBNCmXaXrbKpQ&s",
    approved_by: "Approver of NUM",
    approved_at: "Mongolia"
  },
  {
    name: "Анагаахын шинжлэх ухааны үндэсний их сургууль",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnv54AihextBb88liG1GQlV7cFNp5NG4rIQg&s",
    approved_by: "Approver of МED",
    approved_at: "Mongolia"
  },
  {
    name: "Хөдөө аж ахуйн их сургууль",
    picture: "https://muls.edu.mn/img/logo_muls.png",
    approved_by: "Approver of HAAIS",
    approved_at: "Mongolia"
  },
  {
    name: "Санхүү эдийн засгийн их сургууль",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDnTBkG0gVH6w9p9hoH4w7DVAIvWMv2ibrA&s",
    approved_by: "Approver of UFE",
    approved_at: "Mongolia"
  }
];

const Schools = () => {
  const navigate = useNavigate();

  const handleSchoolClick = (school) => {
    navigate('/logged-user', {
      state: { school } 
    });
  };

  return (
    <>
      <div className='schools-list-container'>
        <ul className="schools-list">
          {massive.map((school, index) => (
            <li
              key={index}
              className="school-item"
              onClick={() => handleSchoolClick(school)}
            >
              <div className="school-content">
                {school.picture && (
                  <img src={school.picture} alt={school.name} className="school-image" />
                )}
                <div className='text-container'>
                  <h3>{school.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Schools;