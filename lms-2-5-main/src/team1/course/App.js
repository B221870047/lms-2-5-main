// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseUserList from './components/CourseUserList';
import CourseUserManagement from './components/CourseUserManagement';
import CourseGroupUserList from './components/CourseGroupUserList';
import CourseGroupManagement from './components/CourseGroupManagement';
import Layout from './Layout';

function App() {
    return (
        <Router>
            <Routes>
                {/* Use Layout as a wrapper for all routes */}
                <Route element={<Layout />}>
                    <Route path="/courses/:course_id/users" element={<CourseUserList />} />
                    <Route path="/courses/:course_id/users/edit" element={<CourseUserManagement />} />
                    <Route path="/courses/:course_id/groups" element={<CourseGroupManagement />} />
                    <Route path="/courses/:course_id/groups/:group_id/users" element={<CourseGroupUserList />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
