import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormContainer, tailLayout, layout } from '../../common/FormStyle';
import { Form, Input, Button } from 'antd';

const initialState = {
  Subjects: '',
  School_id: 1,
  Highest_Degree: '',
  Home_Country: '',
  Home_Time_Zone: '',
  Currrent_Classrooms: '',
  Phone: '',
  First_Language: '',
  Other_Fluent_Languages: '',
  account_status: 'Inactive',
};

const Register_step_2 = ({ stepped_2 }) => {
  const [someData, setSomeData] = useState(initialState);
  const [form] = Form.useForm();

  const handleChange = e => {
    setSomeData({ ...someData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    // step_2(someData);
  };

  return stepped_2 ? (
    <Redirect to="/" />
  ) : (
    <FormContainer>
      <Form onFinish={onSubmit} form={form} {...layout}>
        <Form.Item {...tailLayout}>
          <h1>Additional Info</h1>
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            placeholder="Subjects"
            value={someData.Subjects}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'Subjects is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Highest Degree"
            value={someData.Highest_Degree}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'Highest Degree is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Home Country"
            value={someData.Home_Country}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'Home Country is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Home Time Zone"
            value={someData.Home_Time_Zone}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'Time zone is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Current Classrooms"
            value={someData.Current_Classrooms}
            onSubmit={e => handleChange(e)}
            rules={[
              { required: true, message: 'Current classrooms is required' },
            ]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Phone"
            value={someData.Phone}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'Phone number is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="First Language"
            value={someData.First_Language}
            onSubmit={e => handleChange(e)}
            rules={[{ required: true, message: 'First language is required' }]}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Input
            type="text"
            placeholder="Other Fluent Languages"
            value={someData.Other_Fluent_Languages}
            onSubmit={e => handleChange(e)}
          ></Input>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {
    Register_step_2: state.authReducer.stepped_2,
  };
};

export default connect(mapStateToProps, {})(Register_step_2);
