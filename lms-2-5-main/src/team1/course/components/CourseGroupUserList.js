import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/SampleData';
import '../styles/CourseGroupUserList.css';

const CourseGroupUserList = () => {
    const { course_id, group_id } = useParams();
    const navigate = useNavigate();
    const course = courses[course_id];
    const students = course?.groups[group_id] || [];

    const handleBack = () => {
        navigate(`/courses/${course_id}/groups`);
    };

    return (
        <div className="course-group-user-list">
            <h1>Хичээлийн ID: {course_id}</h1>
            <h2>Лаб: {group_id}</h2>
            <h3>Элссэн сурагчид:</h3>
            {students.length > 0 ? (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            ) : (
                <p>No students enrolled in this group.</p>
            )}
            <button onClick={handleBack} className="back-button">Back</button>
        </div>
    );
};

export default CourseGroupUserList;
