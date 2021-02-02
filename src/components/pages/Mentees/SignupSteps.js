//dependencies
import React from 'react';
import { Form, Input, DatePicker, Select, TimePicker } from 'antd';

//components
import {
  gradeOptions,
  subjectOptions,
  languageOptions,
  countryOptions,
  timeZoneOptions,
  proficiencyOptions,
  methodOptions,
} from './FormOptions';

//destructure TextArea
const { TextArea } = Input;

const bio_questions = [
  { qId: 0, question: 'My favorite thing to do in my free time is:' },
  { qId: 1, question: 'When I grow up, I want to be:' },
  { qId: 2, question: 'Goals & Dreams:' },
  { qId: 3, question: 'Personal Struggles:' },
  { qId: 4, question: 'Other Interests:' },
];

const admin_notes = [
  { qId: 1, question: 'Skills Notes:' },
  { qId: 2, question: 'Family Notes:' },
  { qId: 3, question: 'Other Notes:' },
  { qId: 4, question: 'Admin Notes:' },
];

//steps content used to render Form content in MenteeSignup
export const steps = [
  {
    title: `Student Info`,
    content: (
      <>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First name is required.' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last name is required.' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of birth is required.' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item name="phone" label="Phone" rules={[{ required: false }]}>
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          name="home_country"
          label="Home Country"
          rules={[{ required: true, message: 'Country is required.' }]}
        >
          <Select>{countryOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Time Zone"
          name="home_time_zone"
          rules={[{ required: true, message: 'Time zone is required.' }]}
        >
          <Select>{timeZoneOptions}</Select>
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Parent Info',
    content: (
      <>
        <Form.Item
          label="Parent 1 First Name"
          name="parent_1_first_name"
          rules={[{ required: false }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Last Name"
          name="parent_1_last_name"
          rules={[{ required: false }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Email"
          name="parent_1_email"
          rules={[{ required: false }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Phone"
          name="parent_1_phone"
          rules={[{ required: false }]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="Parent 2 First Name"
          name="parent_2_first_name"
          rules={[{ required: false }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Last Name"
          name="parent_2_last_name"
          rules={[{ required: false }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Email"
          name="parent_2_email"
          rules={[{ required: false }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Phone"
          name="parent_2_phone"
          rules={[{ required: false }]}
        >
          <Input type="tel" />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Academics',
    content: (
      <>
        <Form.Item
          label="Grade"
          name="grade"
          rules={[{ required: true, message: 'Grade is required.' }]}
        >
          <Select>{gradeOptions}</Select>
        </Form.Item>

        <Form.Item
          name="subjects"
          label="Subjects"
          rules={[{ required: true, message: 'Subjects is required.' }]}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {subjectOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="first_language"
          rules={[{ required: true, message: 'Primary language is required.' }]}
        >
          <Select>{languageOptions}</Select>
        </Form.Item>

        <Form.Item label="Other Fluent Languages" name="other_fluent_languages">
          <Select mode="multiple" allowClear placeholder="Please select">
            {languageOptions}
          </Select>
        </Form.Item>

        <Form.Item label="English Level" name="english_proficiency">
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item label="Reading Level" name="reading_level">
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item label="Math Level" name="math_level">
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item label="Academic Description" name="academic_description">
          <TextArea rows={5} />
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Mentoring',
    content: (
      <>
        <Form.Item label="Support Areas" name="support_needed">
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item label="Available Time Zone" name="available_time_zone">
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        <Form.Item label="Available From:" name="as_early_as">
          <TimePicker format={'HH:mm'} />
        </Form.Item>

        <Form.Item label="Available Until:" name="as_late_as">
          <TimePicker format={'HH:mm'} />
        </Form.Item>

        <Form.Item label="Contact Methods" name="methods">
          <Select mode="multiple" allowClear placeholder="Please select">
            {methodOptions}
          </Select>
        </Form.Item>
      </>
    ),
  },
  {
    title: 'Other',
    content: (
      <>
        {bio_questions.map(question => (
          <Form.Item
            label={question.question}
            name={`bio_questions_${question.qId}`}
            key={question.qId}
          >
            <TextArea rows={5} />
          </Form.Item>
        ))}
        {admin_notes.map(note => (
          <Form.Item
            label={note.question}
            name={`admin_notes_${note.qId}`}
            key={note.qId}
          >
            <TextArea rows={5} />
          </Form.Item>
        ))}
      </>
    ),
  },
];
