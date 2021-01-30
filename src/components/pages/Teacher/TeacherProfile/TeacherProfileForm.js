import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

import { Form, Input, Radio } from 'antd';
// import moment from 'moment';

import { editTeacherProfile } from '../../../../state/actions';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';
import Button from '../../../common/Button';
import { debugLog } from '../../../../utils/debugMode';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

import TeacherDashboard from '../TeacherDashboard';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';

const initialState = {
  first_name: '',
  last_name: '',
  account_status: 'Active',
  gender: {
    male: false,
    female: false,
    other: false,
  },
  address: '',
  education_contact: {
    name: '',
    phone: '',
    email: '',
    jobTitle: '',
  },
  notes: '',
};

// const dateFormat = 'MM/DD/YYYY';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const ProfileForm = props => {
  const [formData, setFormData] = useState(initialState);
  const [value, setValue] = useState(1);
  // const pathname = useHistory().location.pathname;
  const params = useParams().id;
  const [form] = Form.useForm();

  console.log(formData);

  useEffect(() => {
    axiosWithAuth() // ! This should later become available through axiosWithAuth() only once we figure out the Auth with Stakeholder's backend
      .get(`/teacher/${params}`)
      .then(res => {
        form.setFieldsValue(res.data);
        setFormData(res.data);
      })
      .catch(err => console.dir(err));
  }, [form, params]);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(formData);
    props.editTeacherProfile(params, formData);
  };

  const handleChange = e => {
    debugLog(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <TeacherDashboard />

      <FormContainer>
        <Form.Item {...tailLayout}>
          <Link to="/profile">Go Back to your Profile</Link>
        </Form.Item>
        <Form onFinish={handleSubmit} form={form} {...layout}>
          <Form.Item
            label="First Name"
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
            rules={[{ required: true, message: 'Last Name is required.' }]}
          >
            <Input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={e => handleChange(e)}
            />
          </Form.Item>

          <Form.Item label="Gender">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
              <Radio value={3}>Other</Radio>
            </Radio.Group>
          </Form.Item>

          {/* <Space direction="vertical" size={12} {...tailLayout}>
            <DatePicker
              defaultValue={moment(`${formData.dob}`, dateFormatList[0])}
              format={dateFormat}
            />
          </Space> */}

          <Form.Item
            label="Address"
            rules={[{ required: true, message: 'Address is required.' }]}
          >
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={e => handleChange(e)}
            />
          </Form.Item>

          <Form.Item label="Education Contact" rules={[{ required: false }]}>
            <Input
              type="text"
              name="name"
              value={formData.phone_number}
              onChange={e => handleChange(e)}
            />

            <Input
              type="text"
              name="phone"
              value={formData.phone_number}
              onChange={e => handleChange(e)}
            />

            <Input
              type="text"
              name="email"
              value={formData.phone_number}
              rules={[
                { required: '@', message: 'Must be a proper Email format' },
              ]}
              onChange={e => handleChange(e)}
            />

            <Input
              type="text"
              name="jobTitle"
              value={formData.phone_number}
              onChange={e => handleChange(e)}
            />
          </Form.Item>

          <Form.Item label="Notes" rules={[{ required: false }]}>
            <Input
              type="text"
              name="notes"
              value={formData.bio}
              onChange={e => handleChange(e)}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              className="l2-btn btn"
              htmlType="submit"
              buttonText="Submit Village Edit"
            />
            <Required id="requiredMsg">
              Fields with <span id="required">&#42;</span> are required.
            </Required>
          </Form.Item>
        </Form>
      </FormContainer>
    </>
  );
};

export default connect(null, { editTeacherProfile })(ProfileForm);
