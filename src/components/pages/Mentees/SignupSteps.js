//dependencies
import React from 'react';
import { Form, Input, DatePicker, Select } from 'antd';

//components
import {
  gradeOptions,
  subjectOptions,
  languageOptions,
  countryOptions,
  timeZoneOptions,
} from './FormOptions';

//steps content used to render Form content in MenteeSignup
export const steps = [
  {
    title: 'Basic Info',
    content: (
      <>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
        >
          <DatePicker />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Academic Info',
    content: (
      <>
        <Form.Item label="Grade" name="grade">
          <Select>{gradeOptions}</Select>
        </Form.Item>

        <Form.Item name="subjects" label="Subjects">
          <Select mode="multiple" allowClear placeholder="Please select">
            {subjectOptions}
          </Select>
        </Form.Item>

        <Form.Item label="Primary Language" name="first_language">
          <Select>{languageOptions}</Select>
        </Form.Item>

        <Form.Item label="Other Fluent Languages" name="other_fluent_languages">
          <Select mode="multiple" allowClear placeholder="Please select">
            {languageOptions}
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
          <Select>{countryOptions}</Select>
        </Form.Item>

        <Form.Item label="Time Zone" name="home_time_zone">
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        <Form.Item name="phone" label="Phone" rules={[{ required: false }]}>
          <Input type="tel" />
        </Form.Item>
      </>
    ),
  },
];
