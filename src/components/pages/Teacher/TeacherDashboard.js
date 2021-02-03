//dependencies
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

//components
import TeacherProfileForm from './TeacherProfile/TeacherProfileForm';
import TeacherProfile from './TeacherProfile/TeacherProfile';
import Mentees from '../Mentees/Mentees';
import MenteeSignup from '../Mentees/MenteeSignup';
import SignupComplete from '../Mentees/SignupComplete';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';

//styles
import '../Headmaster/HeadmasterDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from '../Headmaster/HeadmasterDashboard.style';

const TeacherDashboard = () => {
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);
  const { userId } = useSelector(state => state.authReducer);

  //handles responsive layout of menu drawer
  useEffect(() => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
      setVisible(true);
    }
  });

  //handles drawer close functionality
  const onClose = () => setVisible(false);

  return (
    <div>
      <Dashboard className="testContainer">
        <Switch>
          <Route path="/teacher/:id/edit" component={TeacherProfileForm} />
          <Route path="/teacher/:id" component={TeacherProfile} />
          <Route path="/mentees/signup/complete" component={SignupComplete} />
          <Route path="/mentees/signup" component={MenteeSignup} />
          <Route path="/mentees" component={Mentees} />
          <Route path="/" render={() => <Welcome />} />
        </Switch>
      </Dashboard>
      {desktop ? null : (
        //forces slide out animation of drawer
        <div style={visible ? menuMove : menuIcon}>
          <Button
            type="primary"
            //overrides Ant Design style default
            style={menuButton}
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
          <h2>Hello, Teacher!</h2>
          <NavLink to="/" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Home</button>
          </NavLink>
          <NavLink
            to={`/teacher/${userId - 10}`}
            onClick={() => setVisible(true)}
          >
            <button className="btn l2-btn menuLinks">Teacher</button>
          </NavLink>
          <NavLink to="/mentees" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentees</button>
          </NavLink>
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Logout</button>
          </Link>
        </Drawer>
      </div>
    </div>
  );
};

export default TeacherDashboard;
