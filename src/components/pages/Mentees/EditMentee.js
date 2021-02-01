//dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, TimePicker, DatePicker, Select, Divider } from 'antd';
import moment from 'moment';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../common/FormStyle';

//actions
import { editMentee } from '../../../state/actions/index';
import { useHistory } from 'react-router-dom';

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

const { TextArea } = Input;

const EditMentee = props => {
  const history = useHistory();

  //handles mentee form submit; invoked by onFinish prop on Form
  const handleSubmit = values => {
    const formattedValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      subjects: values.subjects,
      grade: values.grade,
      dob: values.dob,
      home_country: values.home_country,
      home_time_zone: values.home_time_zone,
      phone: values.phone,
      email: values.email,
      first_language: values.first_language,
      other_fluent_languages: values.other_fluent_languages,
      english_proficiency: values.english_proficiency,
      reading_level: values.reading_level,
      math_level: values.math_level,
      academic_description: values.academic_description,
      support_needed: values.support_needed,
      general_availability: {
        key: props.currentMentee.general_availability.key,
        time_zone: values.available_time_zone,
        as_early_as: values.as_early_as,
        as_late_as: values.as_late_as,
        methods: values.methods,
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
        first_name: values.parent_1_first_name,
        last_name: values.parent_1_last_name,
        email: values.parent_1_email,
        phone: values.parent_1_phone,
      },
      parent_2: {
        key: 2,
        first_name: values.parent_2_first_name,
        last_name: values.parent_2_last_name,
        email: values.parent_2_email,
        phone: values.parent_2_phone,
      },
      mentee_picture: props.currentMentee.mentee_picture,
      account_status: 'Active',
      mentor_assignment: '',
      mentoring_time_slot: null,
    };
    console.log(formattedValues);
    props.editMentee(props.currentMentee.id, formattedValues);
    history.push('/mentees/signup/complete');
  };

  return (
    <FormContainer>
      {/*onFinish attribute connects to form.submit hook in MenteeModal*/}
      {/*id attribute connects to form attribute on submit button in MenteeModal*/}
      <Form
        id="menteeForm"
        form={props.form}
        {...layout}
        onFinish={handleSubmit}
        //resets initial values of form fields on close
        preserve={false}
      >
        {/*student conact info*/}
        <Divider plain>Student Contact Info</Divider>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
          initialValue={props.currentMentee.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
          initialValue={props.currentMentee.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
          initialValue={moment(props.currentMentee.dob)}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
          initialValue={props.currentMentee.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.phone}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item
          label="Home Country"
          name="home_country"
          initialValue={props.currentMentee.home_country}
          rules={[{ required: true, message: 'Country is required.' }]}
        >
          <Select>{countryOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Home Time Zone"
          name="home_time_zone"
          initialValue={props.currentMentee.home_time_zone}
          rules={[{ required: true, message: 'Time zone is required.' }]}
        >
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        {/*parent 1 contact info*/}
        <Divider plain>Parent 1 Contact Info</Divider>
        <Form.Item
          label="Parent 1 First Name"
          name="parent_1_first_name"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_1.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Last Name"
          name="parent_1_last_name"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_1.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Email"
          name="parent_1_email"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_1.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Parent 1 Phone"
          name="parent_1_phone"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_1.phone}
        >
          <Input type="tel" />
        </Form.Item>

        {/*parent 2 contact info*/}
        <Divider plain>Parent 2 Contact Info</Divider>
        <Form.Item
          label="Parent 2 First Name"
          name="parent_2_first_name"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_2.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Last Name"
          name="parent_2_last_name"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_2.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Email"
          name="parent_2_email"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_2.email}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Parent 2 Phone"
          name="parent_2_phone"
          rules={[{ required: false }]}
          initialValue={props.currentMentee.parent_2.phone}
        >
          <Input type="tel" />
        </Form.Item>

        {/*academic info*/}
        <Divider plain>Academic Info</Divider>
        <Form.Item
          label="Grade"
          name="grade"
          initialValue={props.currentMentee.grade}
          rules={[{ required: true, message: 'Grade is required.' }]}
        >
          <Select>{gradeOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Subjects"
          name="subjects"
          initialValue={props.currentMentee.subjects}
          rules={[{ required: true, message: 'Subjects is required.' }]}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {subjectOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="first_language"
          initialValue={props.currentMentee.first_language}
          rules={[{ required: true, message: 'Primary language is required.' }]}
        >
          <Select>{languageOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Other Fluent Languages"
          name="other_fluent_languages"
          initialValue={props.currentMentee.other_fluent_languages}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {languageOptions}
          </Select>
        </Form.Item>

        <Form.Item
          label="English Level"
          name="english_proficiency"
          initialValue={props.currentMentee.english_proficiency}
        >
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Reading Level"
          name="reading_level"
          initialValue={props.currentMentee.reading_level}
        >
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Math Level"
          name="math_level"
          initialValue={props.currentMentee.math_level}
        >
          <Select>{proficiencyOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Academic Description"
          name="academic_description"
          initialValue={props.currentMentee.academic_description}
        >
          <TextArea rows={5} />
        </Form.Item>

        {/*mentoring info*/}
        <Divider plain>Mentoring Info</Divider>
        <Form.Item
          label="Support Areas"
          name="support_needed"
          initialValue={props.currentMentee.support_needed}
        >
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Available Time Zone"
          name="available_time_zone"
          initialValue={props.currentMentee.general_availability.time_zone}
        >
          <Select>{timeZoneOptions}</Select>
        </Form.Item>

        <Form.Item
          label="Available From:"
          name="as_early_as"
          initialValue={moment(
            props.currentMentee.general_availability.as_early_as,
            'HH:mm'
          )}
        >
          <TimePicker format={'HH:mm'} />
        </Form.Item>

        <Form.Item
          label="Available Until:"
          name="as_late_as"
          initialValue={moment(
            props.currentMentee.general_availability.as_late_as,
            'HH:mm'
          )}
        >
          <TimePicker format={'HH:mm'} />
        </Form.Item>

        <Form.Item
          label="Contact Methods"
          name="methods"
          initialValue={props.currentMentee.general_availability.methods}
        >
          <Select mode="multiple" allowClear placeholder="Please select">
            {methodOptions}
          </Select>
        </Form.Item>

        {/*dynamic questions*/}
        <Divider plain>Dynamic Questions</Divider>
        {props.currentMentee.bio_questions.map(question => (
          <Form.Item
            label={question.question}
            name={`bio_questions_${question.qId}`}
            key={question.qId}
            initialValue={question.answer}
          >
            <TextArea rows={5} />
          </Form.Item>
        ))}

        {/*notes*/}
        <Divider plain>Notes</Divider>
        {props.currentMentee.admin_notes.map(note => (
          <Form.Item
            label={note.question}
            name={`admin_notes_${note.qId}`}
            key={note.qId}
            initialValue={note.answer}
          >
            <TextArea rows={5} />
          </Form.Item>
        ))}

        <Form.Item {...tailLayout}>
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editMentee })(EditMentee);
