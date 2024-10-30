import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/GuestHome.css';

const CourseUserList = () => {
    const { course_id } = useParams();
    const navigate = useNavigate();

    const initialStudents = [
        { id: 'B2222270067', name: 'Анхбаяр', profilePicture: 'https://media.istockphoto.com/id/1935190924/photo/portrait-of-happy-young-teenager-smiling-in-front-of-camera.webp?s=1024x1024&w=is&k=20&c=t31LkckcfRpjOEIoYQEav1fLDTxc-nMRmkGgsLDLaFQ=' },
        { id: 'B2222270068', name: 'Баяраа', profilePicture: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 'B2222270069', name: 'Ганбаяр', profilePicture: 'https://media.istockphoto.com/id/1828586534/photo/thoughtful-teenager-in-urban-setting.jpg?s=1024x1024&w=is&k=20&c=lc4uqFswLWwLyIoTXRuclngySgfDK8eHQzTYHe94o_I=' },
    ];

    const [students, setStudents] = useState(initialStudents);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('courses')) || {};
        const courseData = savedData[course_id];
        setStudents(courseData?.users || initialStudents);
    }, [course_id]);

    const handleEdit = () => {
        navigate(`/courses/${course_id}/users/edit`);
    };

    const handleGroups = () => {
        navigate(`/courses/${course_id}/groups`);
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            width: '80%',
            margin: 'auto',
        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '1.5rem',
        },
        studentList: {
            listStyleType: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
        },
        studentItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '150px',
        },
        profilePicture: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '0.5rem',
        },
        button: {
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem',
            marginRight: '0.5rem',
        },
        noStudentsText: {
            fontSize: '1.2rem',
            color: '#555',
            textAlign: 'center',
        },
        buttonContainer: {
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Хичээлд элссэн сурагчид: {course_id}</h1>
            {students.length > 0 ? (
                <ul style={styles.studentList}>
                    {students.map((student) => (
                        <li key={student.id} style={styles.studentItem}>
                            <img 
                                src={student.profilePicture || '/default-profile.png'} 
                                alt={`${student.name}'s Profile`}
                                style={styles.profilePicture}
                            />
                            <span>{student.name} ({student.id})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={styles.noStudentsText}>No students enrolled in this course.</p>
            )}
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handleEdit}>Засварлах</button>
                <button style={styles.button} onClick={handleGroups}>Лабын цагууд</button>
            </div>
        </div>
    );
};

export default CourseUserList;
