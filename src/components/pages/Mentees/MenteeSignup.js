//dependencies
import React, { useState } from 'react';
import { Form, Steps, Button } from 'antd';
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

//components
import { steps } from './SignupSteps';
const { Step } = Steps;

const MenteeSignup = props => {
  //preserves form data across steps
  const [formValues, setFormValues] = useState({});

  //controls Step logic
  const [current, setCurrent] = useState(0);

  const history = useHistory();

  //controls Step logic
  const next = values => {
    setCurrent(current + 1);
    let updated = {
      ...formValues,
      ...values,
    };
    setFormValues(updated);
  };

  //controls Step logic
  const prev = () => {
    setCurrent(current - 1);
  };

  //handles form submit
  const handleSubmit = values => {
    const formattedValues = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      subjects: formValues.subjects,
      grade: formValues.grade,
      dob: formValues.dob,
      home_country: formValues.home_country,
      home_time_zone: formValues.home_time_zone,
      phone: formValues.phone,
      email: formValues.email,
      first_language: formValues.first_language,
      other_fluent_languages: formValues.other_fluent_languages,
      english_proficiency: formValues.english_proficiency,
      reading_level: formValues.reading_level,
      math_level: formValues.math_level,
      academic_description: formValues.academic_description,
      support_needed: formValues.support_needed,
      general_availability: {
        key: 1,
        time_zone: formValues.available_time_zone,
        as_early_as: formValues.as_early_as,
        as_late_as: formValues.as_late_as,
        methods: formValues.methods,
      },
      bio_questions: [
        {
          qId: 0,
          question: 'My favorite thing to do in my free time is:',
          answer: values.bio_questions_0,
        },
        {
          qId: 1,
          question: 'When I grow up, I want to be:',
          answer: values.bio_questions_1,
        },
        { qId: 2, question: 'Goals & Dreams:', answer: values.bio_questions_2 },
        {
          qId: 3,
          question: 'Personal Struggles:',
          answer: values.bio_questions_3,
        },
        {
          qId: 4,
          question: 'Other Interests:',
          answer: values.bio_questions_4,
        },
      ],
      admin_notes: [
        { qId: 1, question: 'Skills Notes:', answer: values.admin_notes_1 },
        { qId: 2, question: 'Family Notes:', answer: values.admin_notes_2 },
        { qId: 3, question: 'Other Notes:', answer: values.admin_notes_3 },
        { qId: 4, question: 'Admin Notes:', answer: values.admin_notes_4 },
      ],
      parent_1: {
        key: 1,
        first_name: formValues.parent_1_first_name,
        last_name: formValues.parent_1_last_name,
        email: formValues.parent_1_email,
        phone: formValues.parent_1_phone,
      },
      parent_2: {
        key: 2,
        first_name: formValues.parent_2_first_name,
        last_name: formValues.parent_2_last_name,
        email: formValues.parent_2_email,
        phone: formValues.parent_2_phone,
      },
      mentee_picture: 'http://placeimg.com/640/480',
      account_status: 'Inactive',
      mentor_assignment: '',
      mentoring_time_slot: null,
    };
    props.addMentee(formattedValues);
    history.push('/mentees/signup/complete');
  };

  return (
    <div className="signup-container" style={{ padding: '50px' }}>
      <Steps
        current={current}
        direction="horizontal"
        size="small"
        labelPlacement="vertical"
      >
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <FormContainer>
        <Form.Item {...tailLayout} />
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

export default connect(null, { addMentee })(MenteeSignup);
