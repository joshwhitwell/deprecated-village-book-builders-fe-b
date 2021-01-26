//dependencies
import React from 'react';
import { Modal, Button, Form } from 'antd';

//components
import MenteeProfile from './MenteeProfile';
import EditMentee from './EditMentee';

function MenteeModal(props) {
  //form is initialized inside of Modal so that we can make use
  //of the form.submit hook onOk
  const [form] = Form.useForm();

  //props drilled from Mentees
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
      onCancel={moreInfoHandler}
      //form.submit hook invokes onFinish handler inside MenteeForm
      onOk={form.submit}
      maskClosable
      destroyOnClose
      key={currentMentee.id}
      footer={[
        <Button key="back" onClick={editing ? editingHandler : moreInfoHandler}>
          Return
        </Button>,
        editing ? (
          // form attribute connects to id attribute in menteeForm
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            form="menteeForm"
          >
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
        <EditMentee
          currentMentee={currentMentee}
          editing={editing}
          editingHandler={editingHandler}
          moreInfoHandler={moreInfoHandler}
          //pass form down so that the form.submit hook is connected to MenteeForm
          form={form}
        />
      ) : (
        <MenteeProfile currentMentee={currentMentee} />
      )}
    </Modal>
  );
}

export default MenteeModal;
