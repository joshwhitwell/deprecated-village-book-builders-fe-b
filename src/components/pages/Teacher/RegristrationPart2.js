 import React, {useState} from 'react';
 import Button from '../../common/Button';
 import { Redirect } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { FormContainer, tailLayout, layout } from '../../common/FormStyle';
 import { Form, Input } from 'antd';

const initialState = {
    Subjects: '',
    School_id: 1,
    Highest_Degree: '',
    Home_Country: '',
    Home_Time_Zone: '',
    Currrent_Classrooms: '',
    Phone: '',
    Email: '',
    First_Language: '',
    Other_Fluent_Languages: '',
}

const register_step_2 = ({step_2, stepped_2}) => {
    const [someData, setSomeDate] = useState(initialState);
    const [form] = Form.useForm();

    const handleChange = e => {
        setSomeDate({...someData, [e.target.name]: e.target.value})
    }
    const onSubmit = async () => {
        step_2(someData);
    }

    return stepped_2 ? (
        <Redirect to="/" />
        ) : (
        <FormContainer>
            <Form onFinish={onSubmit} form={form}{...layout}
            >
                <Form.Item {...tailLayout}>
                    <h1>Additional Info</h1>
                </Form.Item>

                <Form.Item>
                    <Input
                    type="text"
                    name="Subjects"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Subjects is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Highest Degree"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Highest Degree is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Home Country"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Home Country is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Home Time Zone"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Time zone is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Current Classrooms"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Current classrooms is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Phone"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'Phone number is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="First Language"
                    onSubmit={e => handleChange(e)}
                    rules={[{required: true, message: 'First language is required'}]}
                    >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                    type="text"
                    name="Other Fluent Languages"
                    onSubmit={e => handleChange(e)}
                    >
                    </Input>
                </Form.Item>
            <Form.Item {...tailLayout}>
                <Button buttonText="Submit" type="submit" />
            </Form.Item>
            </Form>
        </FormContainer>
            )
}

const mapStateToProps = state => {
    return {
        register_step_2: state.authReducer.stepped_2,
    };
};

export default connect(mapStateToProps, { step_2 })(register_step_2);