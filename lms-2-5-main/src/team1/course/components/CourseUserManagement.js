import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/SampleData';
import '../styles/CourseManagement.css';

const CourseUserManagement = () => {
    const { course_id } = useParams();
    const navigate = useNavigate();

    const [students, setStudents] = useState(() => {
        const storedStudents = localStorage.getItem(course_id);
        console.log("Loaded from local storage:", storedStudents);
        return storedStudents ? JSON.parse(storedStudents) : courses[course_id] || [];
    });
    const [newStudent, setNewStudent] = useState('');

    useEffect(() => {
        console.log("Saving to local storage:", students);
        localStorage.setItem(course_id, JSON.stringify(students));
    }, [students, course_id]);

    const handleAddStudent = () => {
        if (newStudent && !students.includes(newStudent)) {
            setStudents([...students, newStudent]);
            setNewStudent(''); // Clear input
        }
    };

    const handleDeleteStudent = (studentId) => {
        setStudents(students.filter((student) => student !== studentId));
    };

    const handleBack = () => {
        navigate(`/courses/${course_id}/users`);
    };

    return (
        <div className="course-user-management">
            <h1>Хичээл үзэж буй сурагчдыг удирдах: {course_id}</h1>
            <div className="user-control">
                <input
                    type="text"
                    value={newStudent}
                    onChange={(e) => setNewStudent(e.target.value)}
                    placeholder="Сурагчын код оруулна уу"
                />
                <button onClick={handleAddStudent}>Хэрэглэгч нэмэх</button>
            </div>
            <h2>Элссэн сурагчид:</h2>
            {students.length > 0 ? (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student}
                            <button onClick={() => handleDeleteStudent(student)} className="delete-button">Устгах</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No students enrolled in this course.</p>
            )}
            <button onClick={handleBack} className="back-button">Back</button>
        </div>
    );
};

export default CourseUserManagement;
