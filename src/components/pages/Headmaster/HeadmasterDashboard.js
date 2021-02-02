import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Link,
  NavLink,
  // Redirect,
  // BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Village from '../Village/Village.component.js';
import VillageForm from '../Village/VillageForm.js';
import Schools from '../School/Schools.component.js';
import SchoolForm from '../School/SchoolForm.js';
import HeadmasterProfile from './HeadmasterProfile/Profile.js';
import ProfileForm from './HeadmasterProfile/ProfileForm.js';
import TeacherApproval from './TeacherApproval/TeacherApproval.js';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';
// import HeadmasterNav from './Drawer';
// import TestComponent from './TestComponent';
import { Drawer, Button, message } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './HeadmasterDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './HeadmasterDashboard.style';
import {
  fetchHeadmasterProfile,
  fetchPendingTeachers,
} from '../../../state/actions/index.js';
import Logout from '../../Logout.js';
// import MentorPairings from './Mentees/Mentees.js';
import Mentees from '../Mentees/Mentees';

function HeadmasterDashboard(props) {
  let { headMasterProfile, pendingTeachers } = props;
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
    }
  }, []);

  useEffect(() => {
    props.fetchHeadmasterProfile(1);
  }, []);

  useEffect(() => {
    props.fetchPendingTeachers(headMasterProfile.schoolId);
  }, [headMasterProfile]);

  useEffect(() => {
    if (pendingTeachers.length > 0) {
      message.warning(
        `There are ${pendingTeachers.length} teachers awaiting approval.`,
        4
      );
    }
  }, [pendingTeachers]);

  const onClose = () => {
    setVisible(false);
  };

  // Todo: this needs to be converted to a mediaquery and removed from here
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
      setVisible(true);
    }
  });

  return (
    <div>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/mentor-pairings" component={Mentees} />
          <Route path="/teacher-approval" component={TeacherApproval} />
          <Route exact path="/profile" component={HeadmasterProfile} />
          <Route path="/profile/edit/:id" component={ProfileForm} />
          <Route path="/mentor-advisor" />
          <Route path="/school-village">
            <Village />
            <Schools />
          </Route>
          <Route
            exact
            path="/village/edit/:villageId"
            component={VillageForm}
          />
          <Route exact path="/school/edit/:schoolId" component={SchoolForm} />
          <Route path="/library" />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Dashboard>
      {desktop ? null : (
        // inline style to force animation
        <div style={visible ? menuMove : menuIcon}>
          <Button
            type="primary"
            style={menuButton} // inline style to override Ant Design
            onClick={() => setVisible(!visible)}
            icon={<MenuOutlined />}
          >
            Menu
          </Button>
        </div>
      )}
      <div>
        <Drawer
          placement={desktop ? 'left' : 'bottom'}
          closable={false}
          onClose={onClose}
          visible={visible}
          mask={false}
          width={desktop ? 300 : 500}
          height={500}
        >
          <h2>Hello, Headmaster!</h2>

          <NavLink to="/" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Home</button>
          </NavLink>
          <NavLink to="/profile" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Profile</button>
          </NavLink>
          <NavLink to={'/mentor-pairings'} onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentor Pairings</button>
          </NavLink>
          <NavLink to={'/teacher-approval'} onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Pending Teachers</button>
          </NavLink>
          <NavLink to="/mentor-advisor" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentor Advisor</button>
          </NavLink>
          <NavLink to="/school-village" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">School/Village</button>
          </NavLink>
          <NavLink to="/library" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Library</button>
          </NavLink>
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Logout</button>
          </Link>
        </Drawer>

        {/* <HeadmasterNav /> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
    headMasterProfile: state.headmasterReducer.headmasterProfile,
    pendingTeachers: state.headmasterReducer.pendingTeachers,
  };
};

export default connect(mapStateToProps, {
  fetchHeadmasterProfile,
  fetchPendingTeachers,
})(HeadmasterDashboard);
// export default HeadmasterDashboard;
