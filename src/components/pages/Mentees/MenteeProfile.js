//dependencies
import React from 'react';
import { Avatar, Divider, Skeleton, Table, Tag } from 'antd';
import moment from 'moment';

//Update margin in span element to margin-right when creating a proper CSS file
//Either make right margin very large or add a comma between languages/subjects

const MenteeProfile = ({ currentMentee }) => {
  const availability_columns = [
    {
      title: 'From',
      dataIndex: 'as_early_as',
      key: 'as_early_as',
    },
    {
      title: 'Until',
      dataIndex: 'as_late_as',
      key: 'as_late_as',
    },
    {
      title: 'Time Zone',
      dataIndex: 'time_zone',
      key: 'time_zone',
    },
    {
      title: 'Methods',
      dataIndex: 'methods',
      key: 'methods',
      render: tags => (
        <>
          {tags?.map(tag => {
            return (
              <Tag color="geekblue" key={tags.indexOf(tag)}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const parent_columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

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

          {/*personal info*/}
          <Divider plain>Date of Birth</Divider>
          <p>{moment.utc(currentMentee.dob).format('dddd, MMMM Do of YYYY')}</p>
          <Divider plain>Email</Divider>
          <p>{currentMentee.email}</p>
          <Divider plain>Phone Number</Divider>
          <p>{currentMentee.phone}</p>
          <Divider plain>Home Country</Divider>
          <p>{currentMentee.home_country}</p>
          <Divider plain>Time Zone</Divider>
          <p>{currentMentee.home_time_zone}</p>
          <Divider plain>Parent Info</Divider>
          <Table
            align="center"
            pagination={false}
            size="small"
            tableLayout="fixed"
            dataSource={[currentMentee.parent_1, currentMentee.parent_2]}
            columns={parent_columns}
            key="parents"
          />

          {/*academic info*/}
          <Divider plain>Grade</Divider>
          <p>{currentMentee.grade}</p>
          <Divider plain>Subjects</Divider>
          <p>
            {currentMentee.subjects.map((element, index) => (
              <span style={{ margin: '3px' }} key={index.toString()}>
                {element}
              </span>
            ))}
          </p>
          <Divider plain>Primary Language</Divider>
          <p>{currentMentee.first_language}</p>
          <Divider plain>Other Fluent Languages</Divider>
          <p>
            {currentMentee.other_fluent_languages?.map((element, index) => (
              <span style={{ margin: '3px' }} key={index.toString()}>
                {element}
              </span>
            ))}
          </p>
          <Divider plain>English Level</Divider>
          <p>{currentMentee.english_proficiency}</p>
          <Divider plain>Reading Level</Divider>
          <p>{currentMentee.reading_level}</p>
          <Divider plain>Math Level</Divider>
          <p>{currentMentee.math_level}</p>
          <Divider plain>Academic Description</Divider>
          <p>{currentMentee.academic_description}</p>

          {/*mentoring info*/}
          <Divider plain>Support Areas</Divider>
          <p>{currentMentee.support_needed}</p>
          <Divider plain>Availability</Divider>
          <Table
            align="center"
            pagination={false}
            size="small"
            tableLayout="fixed"
            dataSource={[currentMentee.general_availability]}
            columns={availability_columns}
            key="availability"
          />

          {/*dynamic questions*/}
          {currentMentee.bio_questions.map(question => {
            return (
              <div key={question.qId}>
                <Divider plain>{question.question}</Divider>
                <p>{question.answer}</p>
              </div>
            );
          })}

          {/*notes*/}
          {currentMentee.admin_notes.map(note => {
            return (
              <div key={note.qId}>
                <Divider plain>{note.question}</Divider>
                <p>{note.answer}</p>
              </div>
            );
          })}

          <Divider plain>Account Status</Divider>
          <p>{currentMentee.account_status}</p>
        </>
      )}
    </div>
  );
};

export default MenteeProfile;
