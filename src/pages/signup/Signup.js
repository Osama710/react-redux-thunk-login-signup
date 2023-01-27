import { Button, Col, Form, Input, message, Row } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { postSignupDetails } from './redux/thunk';

const Signup = () => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const submitSignup = async (values) => {
        console.log(values);
        await dispatch(postSignupDetails(values)).then((response) => {
            console.log(response);
            if (!response.error) {
                message.success(response?.payload?.data?.message);
                navigate('/login');
            } else {
                message.error("Invalid Email or Password");
            }
        })
    }

    return (
        <div className='forms'>
            <div className='my_form'>
                <Form layout="vertical" className='login_form' onFinish={submitSignup}>
                    <Link to={"/"}>
                        <h1>{"< Home"}</h1>
                    </Link>
                    <h2>Signup</h2>
                    <Row gutter={[20, 5]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Full Name" name="full_name" rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name!',
                                },
                            ]}>
                                <Input type='text' className="input" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Username" name="username" rules={[
                                {
                                    required: true,
                                    message: 'Please enter a username!',
                                },
                            ]}>
                                <Input type='text' className="input" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Email Address" name="emailAddress" rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email!',
                                },
                            ]}>
                                <Input type='email' className="input" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Password" name="password" rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password',
                                },
                            ]}>
                                <Input.Password className="input" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Confirm Password" name="confirm_password"
                                dependencies={['password']} hasFeedback rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered does not match!'));
                                        },
                                    }),
                                ]}>
                                <Input.Password className="input" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <div className='flex'>
                                <p>
                                    Already Registered?
                                </p>
                                <Link to={"/login"}>
                                    <span className='link'>Login</span>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <button type="submit">Submit</button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Signup