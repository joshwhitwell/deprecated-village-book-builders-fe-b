import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Form, Input, DatePicker, Radio, Select, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import moment from 'moment';

import { editHeadmasterProfile } from '../../../../state/actions';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';
import Button from '../../../common/Button';
import { debugLog } from '../../../../utils/debugMode';

const initialState = {
  first_name: '',
  last_name: '',
  subjects: [], //Need multiselect
  grade: '', //Need dropdown
  email: '',
  dob: '',
  home_country: '', //Need dropdown
  home_time_zone: '', //Need dropdown
  phone: '',
  first_language: '', //Need dropdown
  other_fluent_languages: [], //Need multiselect
};

const { Option } = Select;
const subjectOptions = [
  <Option key="English" value="English" name="subjects">
    English
  </Option>,
  <Option key="Math" value="Math">
    Math
  </Option>,
  <Option key="Reading" value="Reading">
    Reading
  </Option>,
];

const fluentLanguages = [
  <Option key="English" value="English">
    English
  </Option>,
  <Option key="Spanish" value="Spanish">
    Spanish
  </Option>,
  <Option key="Nepali" value="Nepali">
    Nepali
  </Option>,
];

const countries = ['Belize', 'Ghana', 'Mexico', 'Nepal', 'Peru'];

console.log(subjectOptions);

const MenteeForm = props => {
  const [formData, setFormData] = useState(initialState);
  //   const [value, setValue] = useState(1);
  const params = useParams().id;
  const [form] = Form.useForm();

  //   const onChange = e => {
  //     console.log('radio checked', e.target.value);
  //     setValue(e.target.value);
  //   };

  const handleSubmit = async () => {
    debugLog(formData);
    props.editHeadmasterProfile(params, formData);
    console.log(formData);
  };

  const handleChange = e => {
    // debugLog(e);
    console.log(e);

    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
      debugLog(moment.utc(e).format());
    } else if (Array.isArray(e)) {
      setFormData({ ...formData, subjects: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  //Create handleChange for dropdown
  const handleMultiChange = (value, e) => {
    console.log(e);
    console.log(formData.subjects);

    if (
      e.name == 'grade' ||
      e.name == 'home_country' ||
      e.name == 'home_time_zone' ||
      e.name == 'first_language'
    ) {
      setFormData({ ...formData, [e.name]: e.value });
    }
  };

  const handleLanguageChange = e => {
    if (Array.isArray(e)) {
      setFormData({ ...formData, other_fluent_languages: e });
    }
  };

  //   const handleChange = e => {
  //     debugLog(moment.isMoment(e));
  //   };
  return (
    <FormContainer>
      <Form.Item {...tailLayout}></Form.Item>
      <Form onFinish={handleSubmit} form={form} {...layout}>
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

        <h4>Subjects</h4>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '50%' }}
          placeholder="Please select Subjects"
          defaultValue={[]}
          value={formData.subjects}
          onChange={handleChange}
        >
          {subjectOptions}
        </Select>

        <br />
        <br />
        <h4>Select Grade</h4>
        <Select
          style={{ width: 120 }}
          onChange={handleMultiChange}
          value={formData.grade}
          onSelect={(value, event) => handleMultiChange(value, event)}
        >
          <Option value="Kindergarten" name="grade">
            Kindergarten
          </Option>
          <Option value="1st Grade" name="grade">
            1st Grade
          </Option>
          <Option value="2nd Grade" name="grade">
            2nd Grade
          </Option>
          <Option value="3rd Grade" name="grade">
            3rd Grade
          </Option>
          <Option value="4th Grade" name="grade">
            4th Grade
          </Option>
          <Option value="5th Grade" name="grade">
            5th Grade
          </Option>
          <Option value="6th Grade" name="grade">
            6th Grade
          </Option>
          <Option value="7th Grade" name="grade">
            7th Grade
          </Option>
          <Option value="8th Grade" name="grade">
            8th Grade
          </Option>
          <Option value="9th Grade" name="grade">
            9th Grade
          </Option>
          <Option value="10th Grade" name="grade">
            10th Grade
          </Option>
          <Option value="11th Grade" name="grade">
            11th Grade
          </Option>
          <Option value="12th Grade" name="grade">
            12th Grade
          </Option>
        </Select>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
        >
          <DatePicker name="dob" onChange={e => handleChange(e)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <h4>Select Home Country</h4>
        <Select
          style={{ width: 120 }}
          onChange={handleMultiChange}
          value={formData.home_country}
          onSelect={(value, event) => handleMultiChange(value, event)}
        >
          <Option value="Belize" name="home_country">
            Belize
          </Option>
          <Option value="Ghana" name="home_country">
            Ghana
          </Option>
          <Option value="Mexico" name="home_country">
            Mexico
          </Option>
          <Option value="Nepal" name="home_country">
            Nepal
          </Option>
          <Option value="Peru" name="home_country">
            Peru
          </Option>
        </Select>
        <br />
        <br />
        <h4>Select Time Zone</h4>
        <Select
          style={{ width: 300 }}
          onChange={handleMultiChange}
          value={formData.home_time_zone}
          onSelect={(value, event) => handleMultiChange(value, event)}
        >
          <Option value="Central Standard Time" name="home_time_zone">
            Central Standard Time
          </Option>
          <Option value="Greenwich Mean Time" name="home_time_zone">
            Greenwich Mean Time
          </Option>
          <Option value="Nepal Standard Time" name="home_time_zone">
            Nepal Standard Time
          </Option>
          <Option value="Peru Standard Time" name="home_time_zone">
            Peru Standard Time
          </Option>
        </Select>

        <Form.Item label="Phone" name="phone" rules={[{ required: false }]}>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <br />
        <br />
        <h4>Select First Language</h4>
        <Select
          style={{ width: 300 }}
          onChange={handleMultiChange}
          value={formData.first_language}
          onSelect={(value, event) => handleMultiChange(value, event)}
        >
          <Option value="English" name="first_language">
            English
          </Option>
          <Option value="Spanish" name="first_language">
            Spanish
          </Option>
          <Option value="Nepali" name="first_language">
            Nepali
          </Option>
        </Select>

        <h4>Other Fluent Languages</h4>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '50%' }}
          placeholder="Please select other fluent languages"
          defaultValue={[]}
          value={formData.other_fluent_languages}
          onChange={handleLanguageChange}
        >
          {fluentLanguages}
        </Select>

        <Form.Item {...tailLayout}>
          <Button
            className="l2-btn btn"
            htmlType="submit"
            buttonText="Submit"
          />
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editHeadmasterProfile })(MenteeForm);
