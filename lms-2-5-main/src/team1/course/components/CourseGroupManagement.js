import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CourseGroupManagement.css';

const CourseGroupManagement = () => {
    const { course_id } = useParams();
    const navigate = useNavigate();
    
    // Initialize state from Local Storage or default to the sample data structure
    const getInitialGroups = () => {
        const savedData = JSON.parse(localStorage.getItem('courses'));
        return savedData && savedData[course_id]?.groups
            ? savedData[course_id].groups
            : { "2-4": ["B222270061", "B222270001"], "3-2": ["B222270002", "B222270003"], "5-1": ["B222270004"] };
    };

    const [groups, setGroups] = useState(getInitialGroups);
    const [newGroupId, setNewGroupId] = useState('');

    // Save groups to local storage whenever they change
    const saveToLocalStorage = (updatedGroups) => {
        const savedData = JSON.parse(localStorage.getItem('courses')) || {};
        savedData[course_id] = { groups: updatedGroups };
        localStorage.setItem('courses', JSON.stringify(savedData));
    };

    // Add a new group
    const handleAddGroup = () => {
        if (newGroupId && !groups[newGroupId]) {
            const updatedGroups = { ...groups, [newGroupId]: [] };
            setGroups(updatedGroups);
            saveToLocalStorage(updatedGroups);
            setNewGroupId('');
        }
    };

    // Edit an existing group
    const handleEditGroup = (groupId) => {
        const updatedGroupId = prompt("Enter the new Group ID:", groupId);
        if (updatedGroupId && updatedGroupId !== groupId && !groups[updatedGroupId]) {
            const updatedGroups = { ...groups };
            updatedGroups[updatedGroupId] = updatedGroups[groupId];
            delete updatedGroups[groupId];
            setGroups(updatedGroups);
            saveToLocalStorage(updatedGroups);
        }
    };

    // Delete a group
    const handleDeleteGroup = (groupId) => {
        if (window.confirm(`Та ${groupId}? цагыг устгахдаа итгэлтэй байна уу?`)) {
            const updatedGroups = { ...groups };
            delete updatedGroups[groupId];
            setGroups(updatedGroups);
            saveToLocalStorage(updatedGroups);
        }
    };

    // Navigate to group user list
    const handleGroupClick = (groupId) => {
        navigate(`/courses/${course_id}/groups/${groupId}/users`);
    };

    return (
        <div className="course-group-management">
            <h1>Курсуудын бүлгийг удирдах </h1>
            <div className="group-control">
                <input
                    type="text"
                    value={newGroupId}
                    onChange={(e) => setNewGroupId(e.target.value)}
                    placeholder="Шинэ цаг оруулна уу (2-4 гэх мэт)"
                />
                <button onClick={handleAddGroup}>Цаг нэмэх</button>
            </div>
            <h2>Бүлгүүд:</h2>
            <ul>
                {Object.keys(groups).map((groupId) => (
                    <li key={groupId} onClick={() => handleGroupClick(groupId)} className="group-item">
                        {groupId}
                        <button onClick={(e) => { e.stopPropagation(); handleEditGroup(groupId); }} className="edit-button">Засварлах</button>
                        <button onClick={(e) => { e.stopPropagation(); handleDeleteGroup(groupId); }} className="delete-button">Устгах</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseGroupManagement;
