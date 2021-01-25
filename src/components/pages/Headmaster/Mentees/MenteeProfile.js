//dependencies
import React from 'react';
import { Avatar, Divider, Skeleton } from 'antd';
import moment from 'moment';

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
          <Divider plain>Subjects</Divider>
          <p>{currentMentee.support_needed}</p>
          <Divider plain>Languages (left to right)</Divider>
          <p>{currentMentee.primary_language}</p>
          {/* <Divider plain>Gender</Divider>
          <p>{currentMentee.gender}</p> */}
          {/* <Divider plain>Mentor</Divider>
          <p>
            {currentMentee.mentorId ? currentMentee.mentorId : 'Unassigned'}
          </p> */}
          <Divider plain>Grades</Divider>
          <p>{`English :${currentMentee.english_lvl}`}</p>
          <p>{`Math :${currentMentee.math_lvl}`}</p>
          <p>{`Reading :${currentMentee.reading_lvl}`}</p>
          <p>{`School :${currentMentee.school_lvl}`}</p>
          <Divider plain>Academic Description</Divider>
          <p>{currentMentee.academic_description}</p>
          {/* <Divider plain>Availability</Divider>
          <Table
            align="center"
            pagination={false}
            size="small"
            tableLayout="fixed"
            dataSource={[currentMentee.availability]}
            columns={columns}
            key="table"
          /> */}
          {/* <Divider plain>Other Questions</Divider>
          {currentMentee.dynamic_questions.map(question => {
            return (
              <div key={question.qId}>
                <Divider plain>{question.question}</Divider>
                <p>{question.answer}</p>
              </div>
            );
          })} */}
        </>
      )}
    </div>
  );
};

export default MenteeProfile;
