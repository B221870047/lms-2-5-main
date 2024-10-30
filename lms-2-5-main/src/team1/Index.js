import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Guesthome from './GuestHome';
import Schools from './component/Schools/Schools'
import SignUp from './component/SignUp/SignUp';
import ForgotPassword from './component/ForgorPass/forgot';
import ResetPassword from './component/ResetPass/reset';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
import CourseUserList from './course/components/CourseUserList';
import CourseUserManagement from './course/components/CourseUserManagement';
import CourseGroupUserList from './course/components/CourseGroupUserList';
import CourseGroupManagement from './course/components/CourseGroupManagement';
import Layout from './course/Layout';


const Team1 = () => {
  return (
    <div className="team1-container">
      { }
      <Routes>
        <Route index element={<Guesthome />} />
        <Route path='/schools/current' element={<Schools />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logged-user" element={<UserHome />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/" element={<AdminHome />} />
        <Route element={<Layout />}>
                    <Route path="/courses/:course_id/users" element={<CourseUserList />} />
                    <Route path="/courses/:course_id/users/edit" element={<CourseUserManagement />} />
                    <Route path="/courses/:course_id/groups" element={<CourseGroupManagement />} />
                    <Route path="/courses/:course_id/groups/:group_id/users" element={<CourseGroupUserList />} />
                </Route>

      </Routes>
      
      { }
      {/* <Guesthome /> */}
    </div>
  );
};

export default Team1;