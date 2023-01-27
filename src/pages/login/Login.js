import { Button, Col, Form, Input, message, Row } from 'antd'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SelectAuth } from '../../layouts/redux/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { asynchronouslyGetFromLocal, asynchronouslySetInLocal } from '../../utils/helperFunctions';
import { selectUser } from './redux/slice';
import { postLoginDetails } from './redux/thunk';

const Login = () => {

    const dispatch = useAppDispatch();
    const selectUserDetails = useAppSelector(selectUser);

    useEffect(() => {
        if (selectUserDetails?.data?.user) {
            setUser();
        }
    }, [selectUserDetails]);

    console.log(selectUserDetails);

    const setUser = async () => {
        await asynchronouslySetInLocal(
            "USER_ID",
            selectUserDetails?.data?.user?.id
        );
        const token = await asynchronouslyGetFromLocal("USER_ID");
        dispatch(SelectAuth(token));
    };

    const submitLogin = async (values) => {
        console.log(values);
        await dispatch(postLoginDetails(values)).then((response) => {
            if (!response.error) {
                message.success(response?.payload?.data?.message);
                asynchronouslySetInLocal("APP_TOKEN", response?.payload?.data?.token)
            } else {
                message.error("Invalid Email or Password");
            }
        })
    }

    return (
        <div className='forms'>
            <div className='my_form'>
                <Form layout="vertical" className='login_form' onFinish={submitLogin}>
                    <Link to={"/"}>
                        <h1>{"< Home"}</h1>
                    </Link>
                    <h2>Login</h2>
                    <Row gutter={[20, 5]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item label="Email Address" name="emailAddress" rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}>
                                <Input className="input" />
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
                            <div className='flex'>
                                <p>
                                    Not Registered?
                                </p>
                                <Link to={"/signup"}>
                                    <span className='link'>Signup</span>
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

export default Login