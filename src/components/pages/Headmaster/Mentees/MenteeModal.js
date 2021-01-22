import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import MenteeForm from './MenteeForm';
import MenteeProfile from './MenteeProfile';

const initialState = {
  first_name: '',
  last_name: '',
  gender: '',
  email: '',
  primary_language: '',
  dob: '',
  mentee_picture: '',
  english_lvl: '',
  math_lvl: '',
  reading_lvl: '',
  school_lvl: '',
  academic_description: '',
  support_needed: '',
};

function MenteeModal(props) {
  const [formData, setFormData] = useState(initialState);
  const {
    showModal,
    editing,
    editingHandler,
    moreInfoHandler,
    currentMentee,
  } = props;
  return (
    <Modal
      className="menteeModal"
      visible={showModal}
      title="Mentee Profile"
      // onCancel={moreInfoHandler}
      // maskClosable
      // destroyOnClose
      key={currentMentee.id}
      // footer={null}
      footer={[
        <Button key="back" onClick={editing ? editingHandler : moreInfoHandler}>
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
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <MenteeProfile currentMentee={currentMentee} />
      )}
    </Modal>
  );
}

export default MenteeModal;
