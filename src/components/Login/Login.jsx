import React from 'react';
import './Login.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = values => {
    login(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem('token'));
      if (foundToken) {
        navigate('/profile');
      }
    }, 2000);
  }, [login]);

  return (
    <>
      <h1 className="welcome">Welcome sweet tooth</h1>
      <div className="container">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="mail"
            rules={[{ required: true, message: 'Please input your mail!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
            <Button type="primary" htmlType="submit" className="create_button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
