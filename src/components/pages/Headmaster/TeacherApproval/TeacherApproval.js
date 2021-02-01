import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-router-dom';
import { Profile, ComponentTitle, Label, Button } from 'antd';

import {
  fetchPendingTeachers,
  fetchHeadmasterProfile,
} from '../../../../state/actions/index.js';

function TeacherApproval(props) {
  useEffect(() => {
    async function awaitProfile() {
      await props.fetchHeadmasterProfile(1);
      props.fetchPendingTeachers(props.headMasterProfile.schoolId);
    }
    awaitProfile();
  }, []);

  return (
    <Profile>
      <ComponentTitle titleText="Teacher Approval" />
      <Label>Pending Teachers:</Label>
      {props.pendingTeachers.map((teacher, ind) => {
        return (
          <div key={`${teacher.id}-${ind}`}>
            <p>{`${teacher.first_name} ${teacher.last_name}`}</p>
            <Label>Actions:</Label>
            <p>
              <Button>Confirm</Button>
              <Button>Deny</Button>
            </p>
          </div>
        );
      })}
    </Profile>
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
})(TeacherApproval);
