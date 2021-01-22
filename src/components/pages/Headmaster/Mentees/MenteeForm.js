//dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Radio } from 'antd';
import moment from 'moment';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';

//actions
import { editStudentProfile } from '../../../../state/actions';

//options for mentee gender field
const genders = ['Male', 'Female', 'Other'];

//initializes mentee form
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

const MenteeForm = props => {
  //initializes form state
  const [formData, setFormData] = useState(initialState);

  //handles mentee form submit; invoked by onFinish prop on Form
  const handleSubmit = () => {
    props.editStudentProfile(props.currentMentee.id, formData);
  };

  //controls form field values
  const handleChange = e => {
    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
    } else if (e.target.name === 'gender') {
      setFormData({ ...formData, gender: genders[e.target.value] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <FormContainer>
      <Form.Item {...tailLayout}></Form.Item>
      {/*onFinish prop connects to form.submit hook in MenteeModal*/}
      <Form form={props.form} {...layout} onFinish={handleSubmit}>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
        >
          <Input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
        >
          <Input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
        >
          <DatePicker name="dob" onChange={e => handleChange(e)} />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'email is required.' }]}
        >
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="primary_language"
          rules={[{ required: true, message: 'Phone Number is required.' }]}
        >
          <Input
            type="text"
            name="primary_language"
            value={formData.primary_language}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group
            name="gender"
            value={formData.gender}
            onChange={e => handleChange(e)}
          >
            <Radio value={0}>Male</Radio>
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Picture URL"
          name="mentee_picture"
          rules={[{ required: true, message: 'Bio is required.' }]}
        >
          <Input
            type="text"
            name="mentee_picture"
            value={formData.mentee_picture}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="English Level"
          name="english_lvl"
          rules={[{ required: true, message: 'english level is required.' }]}
        >
          <Input
            type="text"
            name="english_lvl"
            value={formData.english_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Math Level"
          name="math_lvl"
          rules={[{ required: true, message: 'Math level is required.' }]}
        >
          <Input
            type="text"
            name="math_lvl"
            value={formData.math_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Reading Level"
          name="reading_lvl"
          rules={[{ required: true, message: 'reading level is required.' }]}
        >
          <Input
            type="text"
            name="reading_lvl"
            value={formData.reading_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="school Level"
          name="school_lvl"
          rules={[{ required: true, message: 'school level is required.' }]}
        >
          <Input
            type="text"
            name="school_lvl"
            value={formData.school_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Academic Description"
          name="academic_description"
          rules={[
            {
              required: true,
              message: 'academic description level is required.',
            },
          ]}
        >
          <Input
            type="text"
            name="academic_description"
            value={formData.academic_description}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Support Needed"
          name="support_needed"
          rules={[
            { required: true, message: 'Support needed level is required.' },
          ]}
        >
          <Input
            type="text"
            name="support_needed"
            value={formData.support_needed}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="General Availability"
          name="general_availability"
          rules={[
            { required: true, message: 'General Availability is required' },
          ]}
        >
          <Input
            type="text"
            name="general_availability"
            value={formData.general_availability}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Mentor Program Goals"
          name="goals_mentor_program"
          rules={[
            { required: true, message: 'Goals of mentor program is required.' },
          ]}
        >
          <Input
            type="text"
            value={formData.goals_mentor_program}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Personal Goals"
          name="goals_personal"
          rules={[{ required: true, message: 'Personal goals are required.' }]}
        >
          <Input
            type="text"
            value={formData.goals_personal}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="School Community Goals"
          name="goals_school_community"
          rules={[
            {
              required: true,
              message: 'Goals for schools community are required.',
            },
          ]}
        >
          <Input
            type="text"
            value={formData.goals_school_community}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Mentor Advisor Point of Contact"
          name="mentor_advisor_point_of_contact"
          rules={[
            {
              required: true,
              message: 'Mentor advisor point of contact is required.',
            },
          ]}
        >
          <Input
            type="text"
            value={formData.mentor_advisor_point_of_contact}
            onChange={e => handleChange(e)}
          />
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

export default connect(null, { editStudentProfile })(MenteeForm);
