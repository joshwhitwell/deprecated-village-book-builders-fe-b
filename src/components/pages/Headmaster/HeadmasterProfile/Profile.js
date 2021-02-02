//dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { fetchHeadmasterProfile } from '../../../../state/actions';

//styles
import { ThemeProvider } from 'styled-components';
import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common/';
import { ComponentTitle } from '../../../common';

const HeadmasterProfile = props => {
  const { profile } = props;

  return (
    <Profile>
      <ComponentTitle titleText="Headmaster" />
      <img src={`${profile.headmasters_picture}`} alt="headmaster" />
      <Label>Name:</Label>
      <p>{`${profile.first_name} ${profile.last_name}`}</p>

      <Label>Gender:</Label>
      <p>{profile.gender}</p>

      <Label>Address:</Label>
      <p>{profile.address}</p>

      <Label>GPS Coordinates</Label>
      <p>
        {profile.gps_coordinates
          ? `${profile.gps_coordinates[0]}, ${profile.gps_coordinates[1]}`
          : null}
      </p>

      <Label>Education Contact:</Label>
      <p>Name: {profile.education_contact?.name}</p>
      <p>Title: {profile.education_contact?.jobTitle}</p>
      <p>Email: {profile.education_contact?.email}</p>
      <p>Phone: {profile.education_contact?.phone}</p>

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
    profile: state.headmasterReducer.headmasterProfile,
  };
};

export default connect(mapStateToProps, { fetchHeadmasterProfile })(
  HeadmasterProfile
);
