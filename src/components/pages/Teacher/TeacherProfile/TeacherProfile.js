import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { fetchTeacherProfile } from '../../../../state/actions';

import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common';
import { ComponentTitle } from '../../../common';
import TeacherDashboard from '../TeacherDashboard';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
const TeacherProfile = props => {
  const { userId } = useSelector(state => state.authReducer);
  const { profile } = props;
  useEffect(() => {
    props.fetchTeacherProfile(userId - 10); // change this later with login
  }, []);

  return (
    <>
      <TeacherDashboard />
      <Profile>
        <ComponentTitle titleText="teacher" />
        {/* <img src={`${profile.teachers_picture}`} /> */}
        <Label>Name:</Label>
        <p>{`${profile.first_name} ${profile.last_name}`}</p>

        <Label>Account Status:</Label>
        <p>{profile.account_status}</p>

        <Label>Gender:</Label>
        <p>{profile.gender}</p>

        <Label>Address:</Label>
        <p>{profile.address}</p>

        <Label>Education Contact:</Label>
        <p>{profile.name}</p>
        <p>{profile.phone}</p>
        <p>{profile.email}</p>
        <p>{profile.jobTitle}</p>

        <Label>Notes:</Label>
        <p>{profile.notes}</p>

        <Label>Time Zone:</Label>
        <p>{profile.time_zone}</p>
        <div className="teacherButtons">
          <Link to={`/teacher/${profile.id}/edit`}>
            <ThemeProvider theme={{ color: '#6ac66b' }}>
              <Button buttonText="Edit Your Profile" />
            </ThemeProvider>
          </Link>
        </div>
      </Profile>
    </>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.teacherReducer.teacherProfile,
  };
};

export default connect(mapStateToProps, { fetchTeacherProfile })(
  TeacherProfile
);
