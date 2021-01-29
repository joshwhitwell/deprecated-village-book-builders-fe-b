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
    let updated = {
      ...formValues,
      ...values,
    };
    props.addMentee(updated);
    history.push('/mentees/signup/complete');
  };

  return (
    <div className="signup-container" style={{ padding: '50px' }}>
      <Steps current={current}>
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
