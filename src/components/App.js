import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/style.css';
// import PrivateRoute from "../utils/PrivateRoute";
import { checkToken } from '../state/actions/index';
import register_step_2 from '../components/pages/Teacher/RegistrationPart2';
import Login from './pages/Authentication/Login';
import Logout from './pages/Authentication/Logout';
import HeadmasterDashboard from './pages/Headmaster/HeadmasterDashboard';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProgramDashboard from './pages/Program/ProgramDashboard';
import MenteeDashboard from './pages/Mentees/MenteeDashboard';
import Registration from './pages/Teacher/Registration';

const App = ({ role, checkToken }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/register_pt2" component={register_step_2} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/">
          {/*//! this needs to be changed to if there is an unexpired token*/}
          {/* Look for token in case a user refreshes the page & clears redux store, then it repopulates the redux store with userId, role & loggedIn status with checkToken().  */}
          {localStorage.getItem('token') ? (
            <>
              {checkToken()}
              {/* //once we make a reusable dashboard/sidebar, this is where we would put it, passing in the role as props to fill it out accordingly. */}
              {role === 'headmaster' && <HeadmasterDashboard />}
              {role === 'admin' && <AdminDashboard />}
              {role === 'program' && <ProgramDashboard />}
              {role === 'teacher' && <TeacherDashboard />}
              {role === 'mentee' && <MenteeDashboard />}
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // loggedIn: state.authReducer.loggedIn,
    // userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, { checkToken })(App);
