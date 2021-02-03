//dependencies
import React, { useState, useEffect } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';
import MenteeModal from '../Mentees/MenteeModal';
import { fetchMentees } from '../../../state/actions/index';
import { connect } from 'react-redux';
import SignupComplete from '../Mentees/SignupComplete';

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
import MenteeResources from '../Mentees/MenteeResources';

const MenteeDashboard = props => {
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const { fetchMentees } = props;
  const [currentMentee, setCurrentMentee] = useState({});

  //opens and closes MenteeForm in MenteeModal
  const editingHandler = () => setEditing(!editing);

  //opens and closes MenteeModal
  const moreInfoHandler = e => {
    if (showModal) {
      setShowModal(false);
      setEditing(false);
    } else {
      setShowModal(true);
      setCurrentMentee(props.menteeReducer.mentees[0]);
    }
  };

  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]);

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
          <Route path="/mentees/resources" component={MenteeResources} />
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
          <h2>Hello, Mentee!</h2>
          <NavLink to="/mentees/resources" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentee Resources</button>
          </NavLink>
          <button
            className="btn l2-btn menuLinks"
            onClick={e => moreInfoHandler(e)}
          >
            Mentee Profile Page
          </button>

          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Logout</button>
          </Link>
        </Drawer>
      </div>
      <MenteeModal
        showModal={showModal}
        editing={editing}
        editingHandler={editingHandler}
        moreInfoHandler={moreInfoHandler}
        currentMentee={currentMentee}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menteeReducer: state.menteeReducer,
  };
};

export default connect(mapStateToProps, { fetchMentees })(MenteeDashboard);
