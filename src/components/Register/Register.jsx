import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import './Register.scss';

import { Button, Form, Input, DatePicker, Select } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 8,
    },
  },
};

const Register = () => {
  const { create } = useContext(UserContext);
  const [registered, setRegistered] = useState(false);

  const [form] = Form.useForm();
  const onFinish = values => {
    create(values);
    setRegistered(true);
  };

  if (registered) {
    return (
      <div className="register_container">
        <h3>Registration success, please check your email.</h3>
      </div>
    );
  }

  return (
    <div className="register_container">
      <Form
        className="form"
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input suffix={<UserOutlined className="site-form-item-icon" />} />
        </Form.Item>
        <Form.Item
          className="form"
          name="bday"
          label="Bday"
          rules={[
            { type: 'date', message: 'The input is not a valid date' },
            { required: true, message: 'Please input your Birthday!' },
          ]}
        >
          <DatePicker className="bday_picker" />
        </Form.Item>
        <Form.Item
          name="mail"
          label="E-mail"
          tooltip="your email will not be published"
          rules={[
            {
              type: 'mail',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input suffix={<MailOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select className="gender" placeholder="Select your gender">
            <Option value="F">F</Option>
            <Option value="M">M</Option>
            <Option value="none">None</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button className="create_button" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
