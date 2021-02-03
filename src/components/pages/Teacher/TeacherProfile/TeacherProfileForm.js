//dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Button } from 'antd';

//actions
import { editTeacherProfile } from '../../../../state/actions';
import { fetchTeacherProfile } from '../../../../state/actions/index';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';

//components
import { ComponentTitle } from '../../../common';
import {
  subjectOptions,
  languageOptions,
  countryOptions,
  timeZoneOptions,
} from '../../Mentees/FormOptions';

const ProfileForm = props => {
  const history = useHistory();
  //destructures profile from redux store
  const { profile, fetchTeacherProfile } = props;
  const [form] = Form.useForm();

  //sets form fields on page refresh and initial render
  useEffect(() => {
    fetchTeacherProfile(1);
  }, [fetchTeacherProfile]);

  useEffect(() => {
    form.setFieldsValue(profile);
  }, [form, profile]);

  const handleSubmit = values => {
    props.editTeacherProfile(1, {
      ...values,
      classrooms: profile.classrooms,
      account_status: profile.account_status,
    });
    history.push('/teacher/1');
  };

  return (
    <FormContainer>
      <Form onFinish={handleSubmit} form={form} {...layout}>
        <ComponentTitle titleText="Teacher" />

        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
          initialValue={profile.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
          initialValue={profile.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
          initialValue={profile.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Phone is required.' }]}
          initialValue={profile.phone}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: 'Address is required.' }]}
          initialValue={profile.city}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          initialValue={profile.country}
          rules={[{ required: true, message: 'Country is required.' }]}
        >
          <Select>{countryOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Time Zone"
          name="time_zone"
          initialValue={profile.time_zone}
          rules={[{ required: true, message: 'Time zone is required.' }]}
        >
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="first_language"
          initialValue={profile.first_language}
          rules={[{ required: true, message: 'First language is required.' }]}
        >
          <Select>{languageOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Other Fluent Languages"
          name="other_language"
          initialValue={profile.other_language}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {languageOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Subjects"
          name="subjects"
          initialValue={profile.subjects}
          rules={[{ required: true, message: 'Subjects is required.' }]}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {subjectOptions}
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="secondary"
            style={{ marginRight: '15px' }}
            onClick={() => history.push('/teacher/1')}
          >
            Cancel
          </Button>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.teacherReducer.teacherProfile,
  };
};

export default connect(mapStateToProps, {
  editTeacherProfile,
  fetchTeacherProfile,
})(ProfileForm);
