import React, { useEffect, useState } from 'react';
import { fetchMentees, fetchMentors } from '../../../state/actions';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useSelector, connect } from 'react-redux';
import { Descriptions, Select, Button } from 'antd';

import moment from 'moment';
import './MentorPairing.css';

const MentorPairing = ({ fetchMentors, fetchMentees }) => {
  const { Option } = Select;
  const [mentor, setMentor] = useState([]);
  const [mentee, setMentee] = useState([]);
  //   const [matched, setMatched] = useState([]);

  useEffect(() => {
    fetchMentees();
    fetchMentors();
  }, [fetchMentees, fetchMentors]);

  const state = useSelector(state => ({ ...state }));

  const { mentees } = state.menteeReducer;
  const { mentors } = state.mentorReducer;

  const availableMentor = eachMentor => {
    if (eachMentor.account_status === 'Denied') return false;
    if (eachMentor.account_status === 'Inactive') return false;
    return true;
  };

  const availableMentee = eachMentee => {
    if (eachMentee.account_status === false) return false;
    return true;
  };

  const availableMentorSubjects = eachMentor =>
    eachMentor.subjects.map(eachSubject => `${eachSubject}`);

  const selectMentor = () => (
    <Select
      name="mentors"
      style={{ width: '100%' }}
      placeholder="Select a mentor"
      showSearch
      optionFilterProp="children"
      onChange={value => setMentor(value)}
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
      onChange={value => setMentee(value)}
    >
      {mentees.filter(availableMentee).map(eachMentee => (
        <Option key={eachMentee.id} value={eachMentee.id}>{`${
          eachMentee.availability.as_early_as
        } to ${eachMentee.availability.as_late_as} ---- ${
          eachMentee.first_name
        } ${eachMentee.last_name} ---- ${moment(eachMentee.dob).format(
          'MMM Do YY'
        )} (DOB)`}</Option>
      ))}
    </Select>
  );

  const handleUpdate = () => {
    //  axiosWithAuth()
    //    .post('/matched-pairs', matched)
    //    .then(res => {
    //      console.log('Successfully Matched Mentor/Mentee');
    //      setMatched(res.data);
    //    })
    //    .catch(err => {
    //      console.log('Matching Mentor/Mentee Failed: ', err);
    //    });
  };

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
          onClick={handleUpdate}
        >
          Let's Match
        </Button>
      </div>
      <div className="paired">
        {mentors.filter(availableMentor).map(eachMentor => {
          let menteeInfo = {};

          for (let i = 0; i < mentees.length; i++) {
            if (mentees[i].id === eachMentor.mentee) {
              menteeInfo = mentees[i];
            }
          }

          console.log(menteeInfo);

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
                <Descriptions.Item label="Time">{`${2}`}</Descriptions.Item>
              </Descriptions>
              <Button>Cancel</Button>
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

export default connect(mapStateToProps, { fetchMentees, fetchMentors })(
  MentorPairing
);
