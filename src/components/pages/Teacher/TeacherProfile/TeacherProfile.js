import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { fetchTeacherProfile } from '../../../../state/actions';

import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common';
import { ComponentTitle } from '../../../common';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
const TeacherProfile = props => {
  const { profile } = props;
  useEffect(() => {
    props.fetchTeacherProfile(1); // change this later with login
  }, []);
  console.log(profile);
  return (
    <Profile>
      <ComponentTitle titleText="Village" />
      <img src={`${profile.teachers_picture}`} />
      <Label>Name:</Label>
      <p>{`${profile.first_name} ${profile.last_name}`}</p>

      <Label>Gender:</Label>
      <p>{profile.gender}</p>

      <Label>Address:</Label>
      <p>{profile.address}</p>

      <Label>Bio:</Label>
      <p>{profile.bio}</p>

      <Label>Communication App:</Label>
      <p>{profile.communication_app}</p>

      <Label>DOB:</Label>
      <p>{profile.dob}</p>

      <Label>General Availability:</Label>
      <p>{profile.general_availability}</p>

      <Label>Personal Goals:</Label>
      <p>{profile.goals_personal}</p>

      <Label>School Community Goals:</Label>
      <p>{profile.goals_school_community}</p>

      <p></p>

      <Label>Time Zone:</Label>
      <p>{profile.time_zone}</p>
      <div className="villageButtons">
        <Link to={`/profile/edit/${profile.id}`}>
          <ThemeProvider theme={{ color: '#6ac66b' }}>
            <Button buttonText="Edit Your Profile" />
          </ThemeProvider>
        </Link>
      </div>
    </Profile>
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
