import React, { useEffect, useState } from 'react';
import { fetchMentees, fetchMentors } from '../../../state/actions';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useSelector, connect } from 'react-redux';

import { Select } from 'antd';
import { Button } from 'antd';
import { Descriptions } from 'antd';

import moment from 'moment';
import './MentorPairing.css';

const MentorPairing = ({ fetchMentors, fetchMentees }) => {
  const { Option } = Select;
  const [mentors, setMentor] = useState([]);
  const [mentees, setMentee] = useState([]);
  const [matched, setMatched] = useState([]);

  //   useEffect(() => {
  //     fetchMentors();
  //     fetchMentees();
  //   }, [fetchMentees, fetchMentors]);

  //   const state = useSelector(state => ({ ...state }));

  //   const { mentors } = state.mentorReducer;
  //   const { mentees } = state.menteeReducer;

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
      Pairing
      <div className="pairing__box">
        <section className="mentors">{selectMentor()}</section>
        <section className="mentees">{selectMentee()}</section>
        <Button type="primary" onClick={handleUpdate}>
          Let's Match
        </Button>
      </div>
      <div className="paired">
        {mentors.filter(availableMentor).map(eachMentor => {
          let menteeInfo = mentees.filter(
            eachMentee => eachMentee.id === eachMentor.mentee
          );

          return (
            <>
              <hr />
              <Descriptions
                title={`${moment(eachMentor.time_slots).format('MMM Do YY')}`}
              >
                <Descriptions.Item label="Mentor">{`${eachMentor.first_name} ${eachMentor.last_name}`}</Descriptions.Item>
                <Descriptions.Item label="Mentee">
                  {`${menteeInfo[0]} ${menteeInfo.last_name}`}
                </Descriptions.Item>
                <Descriptions.Item label="Subject">{}</Descriptions.Item>
                <Descriptions.Item label="Time">Name</Descriptions.Item>
              </Descriptions>
            </>
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
