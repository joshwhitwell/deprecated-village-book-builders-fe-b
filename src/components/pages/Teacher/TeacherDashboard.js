import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const { userId } = useSelector(state => state.authReducer);

  return (
    <>
      <h2>Hello, Teacher!</h2>
      <div className="teacher__dashboard__navbar">
        {/* subtracting userId from 10 just for temporary purpose */}
        <NavLink to={`/teacher/${userId - 10}`}>Profile</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </>
  );
};

export default TeacherDashboard;
