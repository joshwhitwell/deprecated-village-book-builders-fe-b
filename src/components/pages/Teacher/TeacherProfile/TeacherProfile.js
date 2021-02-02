//dependencies
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { fetchTeacherProfile } from '../../../../state/actions';

//styles
import { ThemeProvider } from 'styled-components';
import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common';
import { ComponentTitle } from '../../../common';

const TeacherProfile = props => {
  const { userId } = useSelector(state => state.authReducer);
  const { profile, fetchTeacherProfile } = props;

  useEffect(() => {
    fetchTeacherProfile(userId - 10); // change this later with login
  }, [fetchTeacherProfile, userId]);

  return (
    <>
      <Profile>
        <ComponentTitle titleText="teacher" />
        <Label>Name:</Label>
        <p>{`${profile.first_name} ${profile.last_name}`}</p>

        <Label>Email:</Label>
        <p>{profile.email}</p>

        <Label>Phone:</Label>
        <p>{profile.phone}</p>

        <Label>Primary Language:</Label>
        <p>{profile.first_language}</p>

        <Label>Other Languages:</Label>
        <p>
          {profile.other_language?.map((language, i) => {
            if (i === profile.other_language.length - 1) {
              return <span key={i}>{language}</span>;
            } else {
              return <span key={i}>{language}, </span>;
            }
          })}
        </p>

        <Label>City:</Label>
        <p>{profile.city}</p>

        <Label>Country</Label>
        <p>{profile.country}</p>

        <Label>Time Zone:</Label>
        <p>{profile.time_zone}</p>

        <Label>Classrooms:</Label>
        <p>{profile.classrooms}</p>

        <Label>Account Status:</Label>
        <p>{profile.account_status}</p>

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
