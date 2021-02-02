//  import React, {useState} from 'react';
//  import Button from '../../common/Button';
//  import {Redirect} from 'react';
//  import {connect} from 'react';
// import { Form, FormContainer, tailLayout } from '../../common/FormStyle';
// import { Input } from 'antd';

// const initialState = {
//     Subjects = '',
//     Highest_Degree = '',
//     Home_Country = '',
//     Home_Time_Zone = '',
//     Currrent_Classrooms = '',
//     Phone = '',
//     Email = '',
//     First_Language = '',
//     Other_Fluent_Languages = '',
// }

// const register_step_2 = ({step_2, stepped_2}) => {
//     const [someData, setSomeDate] = useState(initialState);
//     const [form] = Form.useForm();

//     const handleChange = async = () => {
//         setSomeDate({...theData, [e.target.name]: e.target.value})
//     }
//     const onSubmit = e => {
//         step_2(someData);
//     }

//     return(
//         <FormContainer>
//             <Form onFinish={onSubmit} form={form}{...layout}
//             >
//                 <Form.Item {...tailLayout}>
//                     <h1>Additional Info</h1>
//                 </Form.Item>

//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Subjects"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Highest Degree"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Home Country"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Home Time Zone"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Current Classrooms"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Phone"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Email"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="First Language"
//                     >
//                     </Input>
//                 </Form.Item>
//                 <Form.Item>
//                     <Input
//                     type="text"
//                     name="Other Fluent Languages"
//                     >
//                     </Input>
//                 </Form.Item>
//             </Form>
//         </FormContainer>
//     )
// }
