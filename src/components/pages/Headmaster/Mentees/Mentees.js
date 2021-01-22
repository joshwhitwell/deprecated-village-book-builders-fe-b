import React, { useEffect, useState } from 'react';
// import { axiosWithAuth } from '../../../../utils/axiosWithAuth';
import { Button, Divider, Input, Modal, List, Avatar } from 'antd';
import { connect } from 'react-redux';
import { checkToken, fetchMentees } from '../../../../state/actions/index';
import { editStudentProfile } from '../../../../state/actions';
// import MenteeForm from './MenteeForm';
// import MenteeProfile from './MenteeProfile';
import MenteeModal from './MenteeModal';

// const initialState = {
//   first_name: '',
//   last_name: '',
//   gender: '',
//   email: '',
//   primary_language: '',
//   dob: '',
//   mentee_picture: '',
//   english_lvl: '',
//   math_lvl: '',
//   reading_lvl: '',
//   school_lvl: '',
//   academic_description: '',
//   support_needed: '',
// };

const Mentees = props => {
  let menteesSelection = [...props.mentees];
  console.log('render');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});
  // const [formData, setFormData] = useState(initialState);

  const editingHandler = e => {
    setEditing(!editing);
  };
  const searchHandler = e => setSearch(e.target.value);
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentee(menteeData);
      // console.log(menteeData);
    }
  };

  // const handleSubmit = async () => {
  //   // debugLog(props.formData);
  //   // props.editHeadmasterProfile(params, formData);
  //   console.log('inside submit');
  //   props.editStudentProfile(currentMentee.id, formData);
  // };

  if (Array.isArray(menteesSelection)) {
    menteesSelection = menteesSelection.filter(
      item =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const { fetchMentees } = props;

  useEffect(() => {
    fetchMentees();
    console.log('api call');
  }, [fetchMentees]);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">Mentee Sign Up</h1>
      <div className="exploreWrapper">
        <Button
          style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
          align="center"
        >
          Create New Account
        </Button>
        <Input.Search
          value={search}
          placeholder="Search by Name"
          style={{ width: '80%', alignSelf: 'center' }}
          onChange={searchHandler}
        />
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={menteesSelection}
          renderItem={item => (
            <List.Item key={item.id}>
              <div className="listItemWrapper">
                <div className="listItemMeta">
                  <List.Item.Meta
                    avatar={<Avatar src={item.mentee_picture} />}
                    title={
                      <a href="https://ant.design">
                        {item.first_name + ' ' + item.last_name}
                      </a>
                    }
                    description={item.academic_description}
                  />
                </div>
                <div className="listItemButtonWrapper">
                  <Button
                    onClick={e => moreInfoHandler(e, item)}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    More Info
                  </Button>
                  <Button
                    onClick={e => {
                      moreInfoHandler(e, item);
                      editingHandler();
                    }}
                    className="listItemButton"
                    danger
                    size="middle"
                    type="default"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
        ,
      </div>
      <MenteeModal
        showModal={showModal}
        editing={editing}
        editingHandler={editingHandler}
        moreInfoHandler={moreInfoHandler}
        currentMentee={currentMentee}
      />
      {/* <Modal
        className="menteeModal"
        visible={showModal}
        title="Mentee Profile"
        // onCancel={moreInfoHandler}
        // maskClosable
        // destroyOnClose
        key={currentMentee.id}
        // footer={null}
        footer={[
          <Button
            key="back"
            onClick={editing ? editingHandler : moreInfoHandler}
          >
            Return
          </Button>,
          <Button key="delete" onClick={() => console.log('delete')}>
            Delete
          </Button>,
          editing ? (
            <Button key="submit" type="primary">
              Submit
            </Button>
          ) : (
            <Button key="edit" type="primary" onClick={editingHandler}>
              Edit
            </Button>
          ),
        ]}
      >
        {editing ? (
          <MenteeForm
            currentMentee={currentMentee}
            editing={editing}
            editingHandler={editingHandler}
            moreInfoHandler={moreInfoHandler}
          />
        ) : (
          <MenteeProfile currentMentee={currentMentee}/>
        )}
      </Modal> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.headmasterReducer.mentees,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, {
  checkToken,
  fetchMentees,
  editStudentProfile,
})(Mentees);
