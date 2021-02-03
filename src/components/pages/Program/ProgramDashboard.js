//dependencies
import React, { useState, useEffect } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';

//styles
import '../Headmaster/HeadmasterDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from '../Headmaster/HeadmasterDashboard.style';

//components
import Logout from '../../Logout';
import Mentees from '../Mentees/Mentees';
import MenteeSignup from '../Mentees/MenteeSignup';
import SignupComplete from '../Mentees/SignupComplete';

function ProgramDashboard() {
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);

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
          <Route path="/mentees/signup/complete" component={SignupComplete} />
          <Route path="/mentees/signup" component={MenteeSignup} />
          <Route path="/mentees" component={Mentees} />
          <Route path="/logout" component={Logout} />
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
          <NavLink to="/mentees" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentees</button>
          </NavLink>
          <NavLink to="/mentees/signup" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Sign Up</button>
          </NavLink>
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Logout</button>
          </Link>
        </Drawer>
      </div>
    </div>
  );
}

export default ProgramDashboard;
