//dependencies
import React from 'react';
import { Avatar, Divider, Skeleton } from 'antd';
import moment from 'moment';

//Update margin in span element to margin-right when creating a proper CSS file
//Either make right margin very large or add a comma between languages/subjects

const MenteeProfile = ({ currentMentee }) => {
  return (
    <div className="menteeProfileWrapper">
      {!currentMentee ? (
        <Skeleton />
      ) : (
        <>
          <Avatar
            src={currentMentee.mentee_picture}
            size={250}
            style={{ alignSelf: 'center' }}
          />
          <Divider size="large" />
          <h1 style={{ alignSelf: 'center' }}>
            {currentMentee.first_name + ' ' + currentMentee.last_name}
          </h1>
          <Divider plain>Email</Divider>
          <p>{currentMentee.email}</p>
          <Divider plain>Date of Birth</Divider>
          <p>{moment.utc(currentMentee.dob).format('dddd, MMMM Do of YYYY')}</p>
          <Divider plain>Subjects Working On</Divider>
          <p>
            {currentMentee.subjects.map(element => (
              <span style={{ margin: '3px' }}>{element}</span>
            ))}
          </p>
          <Divider plain>Current Grade</Divider>
          <p>{currentMentee.grade}</p>
          <Divider plain>Primary Language</Divider>
          <p>{currentMentee.first_language}</p>
          <Divider plain>Other Languages</Divider>
          <p>
            {currentMentee.other_fluent_languages.map(element => (
              <span style={{ margin: '3px' }}>{element}</span>
            ))}
          </p>

          <Divider plain>Home Country</Divider>
          <p>{currentMentee.home_country}</p>
          <Divider plain>Time Zone</Divider>
          <p>{currentMentee.home_time_zone}</p>
          <Divider plain>Phone Number</Divider>
          <p>{currentMentee.phone}</p>
          <Divider plain>Account Status</Divider>
          <p>{currentMentee.account_status}</p>
        </>
      )}
    </div>
  );
};

export default MenteeProfile;
