import React from 'react';
import { NavLink } from 'react-router-dom';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  return (
    <>
      <h2>Hello, Teacher!</h2>
      <div className="teacher__dashboard__navbar">
        <NavLink to="/teacher-profile/:teacherId">Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </>
  );
};

export default TeacherDashboard;
