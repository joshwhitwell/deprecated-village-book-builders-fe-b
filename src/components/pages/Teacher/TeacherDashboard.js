//dependencies
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';

//components
import TeacherProfileForm from './TeacherProfile/TeacherProfileForm';
import TeacherProfile from './TeacherProfile/TeacherProfile';
import Mentees from '../Mentees/Mentees';
import MenteeSignup from '../Mentees/MenteeSignup';
import SignupComplete from '../Mentees/SignupComplete';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';

//styles
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const { userId } = useSelector(state => state.authReducer);

  return (
    <>
      <h2>Hello, Teacher!</h2>
      <div className="teacher__dashboard__navbar">
        {/* subtracting userId from 10 just for temporary purpose */}
        <NavLink to={`/teacher/${userId - 10}`}>Profile</NavLink>
        <NavLink to={`/mentees`}>Mentees</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </div>
      <Switch>
        <Route path="/teacher/:id/edit" component={TeacherProfileForm} />
        <Route path="/teacher/:id" component={TeacherProfile} />
        <Route path="/mentees/signup/complete" component={SignupComplete} />
        <Route path="/mentees/signup" component={MenteeSignup} />
        <Route path="/mentees" component={Mentees} />
        <Route path="/" render={() => <Welcome />} />
      </Switch>
    </>
  );
};

export default TeacherDashboard;
