//dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Select } from 'antd';
import moment from 'moment';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';

//actions
import { editMentee } from '../../../../state/actions';

//initializes mentee form
const initialState = {
  first_name: '',
  last_name: '',
  subjects: [],
  grade: '',
  email: '',
  dob: '',
  home_country: '',
  home_time_zone: '',
  phone: '',
  first_language: '',
  other_fluent_languages: [],
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

const MenteeForm = props => {
  //initializes form state
  const [formData, setFormData] = useState(initialState);

  //handles mentee form submit; invoked by onFinish prop on Form
  const handleSubmit = () => {
    props.editMentee(props.currentMentee.id, formData);
  };

  //controls form field values
  const handleChange = e => {
    console.log(e);

    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
    } else if (Array.isArray(e)) {
      setFormData({ ...formData, subjects: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  //Create handleChange for dropdown
  const handleMultiChange = (value, e) => {
    if (
      e.name === 'grade' ||
      e.name === 'home_country' ||
      e.name === 'home_time_zone' ||
      e.name === 'first_language'
    ) {
      setFormData({ ...formData, [e.name]: e.value });
    }
  };

  const handleLanguageChange = e => {
    if (Array.isArray(e)) {
      setFormData({ ...formData, other_fluent_languages: e });
    }
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
      >
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
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editMentee })(MenteeForm);
