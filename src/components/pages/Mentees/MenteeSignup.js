//dependencies
import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Steps, Button } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

//actions
import { addMentee } from '../../../state/actions/index';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../common/FormStyle';

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
  account_status: 'Inactive',
};

//creates select options for subject field
const { Option } = Select;
const subjectOptions = [
  <Option key="English" value="English" name="subjects">
    English
  </Option>,
  <Option key="Science" value="Science" name="subjects">
    Science
  </Option>,
  <Option key="Math" value="Math" name="subjects">
    Math
  </Option>,
  <Option
    key="Theoretical Astroskiing"
    value="Theoretical Astroskiing"
    name="subjects"
  >
    Theoretical Astroskiing
  </Option>,
];

//creates select options for langauge field
const fluentLanguages = [
  <Option key="English" value="English" name="first_language">
    English
  </Option>,
  <Option key="Latin" value="Latin" name="first_language">
    Latin
  </Option>,
  <Option key="Spanish" value="Spanish" name="first_language">
    Spanish
  </Option>,
  <Option key="Sanskrit" value="Sanskrit" name="first_language">
    Sanskrit
  </Option>,
  <Option key="Sumerian" value="Sumerian" name="first_language">
    Sumerian
  </Option>,
];

const MenteeSignup = props => {
  //initializes form state
  const [formData, setFormData] = useState(initialState);
  //current state used to control Step logic
  const [current, setCurrent] = useState(0);
  //destructures Step component from Steps
  const { Step } = Steps;

  const history = useHistory();

  //controls Step logic
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  //controls form field values
  const handleChange = e => {
    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
    } else if (Array.isArray(e)) {
      setFormData({ ...formData, subjects: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  //creates handleChange for dropdown
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

  //creates change handler for language input field
  const handleLanguageChange = e => {
    if (Array.isArray(e)) {
      setFormData({ ...formData, other_fluent_languages: e });
    }
  };

  const handleSubmit = e => {
    props.addMentee(formData);
    history.push('/mentees/signup/complete');
  };

  //steps content used to render Form content
  const steps = [
    {
      title: 'Basic Info',
      content: (
        <>
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

          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Date of Birth is required.' }]}
          >
            <DatePicker name="dob" onChange={e => handleChange(e)} />
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Academic Info',
      content: (
        <>
          <Form.Item name="grade" label="Grade">
            <Select
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
          </Form.Item>

          <Form.Item name="subjects" label="Subjects">
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select Subjects"
              value={formData.subjects}
              onChange={handleChange}
            >
              {subjectOptions}
            </Select>
          </Form.Item>

          <Form.Item name="first_language" label="Primary Language">
            <Select
              value={formData.first_language}
              onSelect={(value, event) => handleMultiChange(value, event)}
            >
              {fluentLanguages}
            </Select>
          </Form.Item>

          <Form.Item
            name="other_fluent_languages"
            label="Other Fluent Languages"
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select other fluent languages"
              value={formData.other_fluent_languages}
              onChange={handleLanguageChange}
            >
              {fluentLanguages}
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Contact Info',
      content: (
        <>
          <Form.Item name="home_country" label="Home Country">
            <Select
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
          </Form.Item>
          <Form.Item name="home_time_zone" label="Time Zone">
            <Select
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
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: false }]}>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={e => handleChange(e)}
            />
          </Form.Item>
        </>
      ),
    },
  ];

  return (
    <div className="signup-container" style={{ padding: '50px' }}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <FormContainer>
        <Form.Item {...tailLayout}></Form.Item>
        <Form
          {...layout}
          onFinish={current === steps.length - 1 ? handleSubmit : next}
        >
          {steps[current].content}
          <Form.Item {...tailLayout}>
            <Required id="requiredMsg">
              Fields with <span id="required">&#42;</span> are required.
            </Required>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div
              className="steps-action"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form.Item>
        </Form>
      </FormContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menteeReducer: state.menteeReducer,
  };
};

export default connect(mapStateToProps, { addMentee })(MenteeSignup);