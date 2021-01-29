//dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Select } from 'antd';
import moment from 'moment';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../common/FormStyle';

//actions
import { editMentee } from '../../../state/actions/index';
import { useHistory } from 'react-router-dom';

//components
import {
  gradeOptions,
  subjectOptions,
  languageOptions,
  countryOptions,
  timeZoneOptions,
} from './FormOptions';

const EditMentee = props => {
  const history = useHistory();

  //handles mentee form submit; invoked by onFinish prop on Form
  const handleSubmit = values => {
    console.log(values);
    props.editMentee(props.currentMentee.id, {
      ...values,
      account_status: 'Active',
    });
    history.push('/mentees/signup/complete');
  };

  return (
    <FormContainer>
      <Form.Item {...tailLayout}></Form.Item>
      {/*onFinish attribute connects to form.submit hook in MenteeModal*/}
      {/*id attribute connects to form attribute on submit button in MenteeModal*/}
      <Form
        id="menteeForm"
        form={props.form}
        {...layout}
        onFinish={handleSubmit}
        //resets initial values of form fields on close
        preserve={false}
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
          initialValue={props.currentMentee.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
          initialValue={props.currentMentee.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
          initialValue={props.currentMentee.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
          initialValue={moment(props.currentMentee.dob)}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Grade"
          name="grade"
          initialValue={props.currentMentee.grade}
        >
          <Select>{gradeOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Subjects"
          name="subjects"
          initialValue={props.currentMentee.subjects}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {subjectOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="first_language"
          initialValue={props.currentMentee.first_language}
        >
          <Select>{languageOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Other Fluent Languages"
          name="other_fluent_languages"
          initialValue={props.currentMentee.other_fluent_languages}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {languageOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Home Country"
          name="home_country"
          initialValue={props.currentMentee.home_country}
        >
          <Select>{countryOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Time Zone"
          name="home_time_zone"
          initialValue={props.currentMentee.home_time_zone}
        >
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.phone}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editMentee })(EditMentee);
