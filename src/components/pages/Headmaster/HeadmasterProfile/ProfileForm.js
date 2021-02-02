//dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Radio, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';

//actions
import { editHeadmasterProfile } from '../../../../state/actions';

//styles
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';

//components
import { ComponentTitle } from '../../../common';

//destructure TextArea
const { TextArea } = Input;

const ProfileForm = props => {
  const history = useHistory();
  //destructures profile from redux store
  const { profile } = props;
  const [form] = useForm();

  //sets form fields on page refresh and initial render
  useEffect(() => {
    form.setFieldsValue({
      ...profile,
      contact_name: profile.education_contact?.name,
      contact_phone: profile.education_contact?.phone,
      contact_email: profile.education_contact?.email,
      contact_title: profile.education_contact?.jobTitle,
    });
  }, [form, profile]);

  //handles form submit on form finish
  const handleSubmit = values => {
    const formattedValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      gender: values.gender,
      address: values.address,
      gps_coordinates: values.gps_coordinates,
      images_drive_folder_link: profile.images_drive_folder_link,
      headmasters_picture: profile.headmasters_picture,
      education_contact: {
        name: values.contact_name,
        phone: values.contact_phone,
        email: values.contact_email,
        jobTitle: values.contact_title,
      },
      notes: values.notes,
    };
    props.editHeadmasterProfile(1, formattedValues);
    history.push('/profile');
  };

  return (
    <FormContainer>
      <Form onFinish={handleSubmit} form={form} {...layout}>
        <ComponentTitle titleText="Headmaster" />

        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
          initialValue={profile.first_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
          initialValue={profile.last_name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Gender is required.' }]}
          initialValue={profile.gender}
        >
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Address is required.' }]}
          initialValue={profile.address}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="GPS Coordinates"
          name="gps_coordinates"
          rules={[{ required: true, message: 'GPS coordinates are required.' }]}
          initialValue={profile.gps_coordinates}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Contact Name"
          name="contact_name"
          rules={[{ required: true, message: 'Contact name is required.' }]}
          initialValue={profile.education_contact?.name}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Contact Phone"
          name="contact_phone"
          rules={[{ required: true, message: 'Contact phone is required.' }]}
          initialValue={profile.education_contact?.phone}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Contact Email"
          name="contact_email"
          rules={[{ required: true, message: 'Contact email is required.' }]}
          initialValue={profile.education_contact?.email}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          label="Contact Title"
          name="contact_title"
          rules={[{ required: true, message: 'Contact title is required.' }]}
          initialValue={profile.education_contact?.jobTitle}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Notes" name="notes" initialValue={profile.notes}>
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="secondary"
            style={{ marginRight: '15px' }}
            onClick={() => history.push('/profile')}
          >
            Cancel
          </Button>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.headmasterReducer.headmasterProfile,
  };
};

export default connect(mapStateToProps, {
  editHeadmasterProfile,
})(ProfileForm);
