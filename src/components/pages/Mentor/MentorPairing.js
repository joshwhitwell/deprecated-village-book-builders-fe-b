import React, { useEffect, useState } from 'react';
import {
  fetchMentees,
  fetchMentors,
  editMentor,
  cancelMatches,
} from '../../../state/actions';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useSelector, connect } from 'react-redux';
import { Descriptions, Select, Button } from 'antd';

import moment from 'moment';
import './MentorPairing.css';

const MentorPairing = ({
  fetchMentors,
  fetchMentees,
  editMentor,
  cancelMatches,
}) => {
  const { Option } = Select;
  const [mentor, setMentor] = useState({});
  const [menteeId, setMenteeId] = useState(-1);
  console.log('MENTOR: ', mentor, '\nMENTEE: ', menteeId);
  //   const [matched, setMatched] = useState([]);
  const state = useSelector(state => ({ ...state }));

  const { mentees } = state.menteeReducer;
  const { mentors } = state.mentorReducer;

  useEffect(() => {
    fetchMentees();
    fetchMentors();
  }, [fetchMentees, fetchMentors]);

  const availableMentor = eachMentor => {
    if (eachMentor.account_status === 'Denied') return false;
    if (eachMentor.account_status === 'Inactive') return false;
    if (eachMentor.mentee !== -1) return false;
    return true;
  };

  const matchedMentor = eachMentor => {
    if (eachMentor.account_status === 'Denied') return false;
    if (eachMentor.account_status === 'Inactive') return false;
    if (eachMentor.mentee < 0) return false;
    return true;
  };

  const availableMentee = eachMentee => {
    if (eachMentee.account_status === false) return false;
    for (let i = 0; i < mentors.length; i++) {
      if (eachMentee.id === mentors[i].mentee) return false;
    }
    return true;
  };

  const availableMentorSubjects = eachMentor =>
    eachMentor.subjects.map(eachSubject => `${eachSubject}`);

  const handleUpdate = (mentor, menteeId) => {
    editMentor(mentor, menteeId);
    fetchMentors();
  };

  const handleCancel = mentor => {
    cancelMatches(mentor);
    fetchMentors();
  };

  const selectMentor = () => (
    <Select
      name="mentors"
      style={{ width: '100%' }}
      placeholder="Select a mentor"
      showSearch
      optionFilterProp="children"
      onChange={value => {
        mentors.forEach(eachMentor => {
          if (eachMentor.id === value) {
            setMentor(eachMentor);
          }
        });
      }}
    >
      {mentors.filter(availableMentor).map(eachMentor => (
        <Option key={eachMentor.id} value={eachMentor.id}>
          {`${moment(eachMentor.time_slots).format(
            'MMMM Do YYYY, h:mm a'
          )} ---- ${eachMentor.first_name} ${
            eachMentor.last_name
          } ---- ${availableMentorSubjects(eachMentor)}`}
        </Option>
      ))}
    </Select>
  );

  const selectMentee = () => (
    <Select
      name="mentees"
      style={{ width: '100%' }}
      placeholder="Select a mentee"
      showSearch
      optionFilterProp="children"
      onChange={value => setMenteeId(value)}
    >
      {mentees.filter(availableMentee).map(eachMentee => (
        <Option key={eachMentee.id} value={eachMentee.id}>{`${
          eachMentee.general_availability.as_early_as
        } to ${eachMentee.general_availability.as_late_as} ---- ${
          eachMentee.first_name
        } ${eachMentee.last_name} ---- ${moment(eachMentee.dob).format(
          'MMM Do YY'
        )} (DOB)`}</Option>
      ))}
    </Select>
  );

  return (
    <div className="mentor__pairing">
      <div className="pairing__box">
        <section className="mentors selection">{selectMentor()}</section>
        <section className="mentees selection">{selectMentee()}</section>
        <Button
          className="match-button"
          type="primary"
          shape="round"
          style={{ backgroundColor: '#ff914d', border: '#ff914d' }}
          onClick={() => handleUpdate(mentor, menteeId)}
        >
          Let's Match
        </Button>
      </div>
      <div className="paired">
        {mentors.filter(matchedMentor).map(eachMentor => {
          let menteeInfo = {};

          for (let i = 0; i < mentees.length; i++) {
            if (mentees[i].id === eachMentor.mentee) {
              menteeInfo = mentees[i];
            }
          }

          return (
            <div className="descriptions-container" key={eachMentor.id}>
              <hr />
              <Descriptions
                className="descriptions"
                title={`${moment(eachMentor.time_slots).format('MMM Do YY')}`}
              >
                <Descriptions.Item label="Mentor">{`${eachMentor.first_name} ${eachMentor.last_name}`}</Descriptions.Item>
                <Descriptions.Item label="Mentee">{`${menteeInfo.first_name}`}</Descriptions.Item>
                <Descriptions.Item label="Language">{`${menteeInfo.primary_language}`}</Descriptions.Item>
                <Descriptions.Item label="Time">{`${moment(
                  eachMentor.time_slots
                ).format('MMM Do YY')}`}</Descriptions.Item>
              </Descriptions>
              <Button onClick={() => handleCancel(eachMentor)}>Cancel</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  fetchMentees,
  fetchMentors,
  editMentor,
  cancelMatches,
})(MentorPairing);
