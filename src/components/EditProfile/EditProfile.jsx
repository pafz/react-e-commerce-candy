import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Button, Input, DatePicker, Select, Form, Space, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

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

const EditProfile = () => {
  const { user, getUserInfo, updateProfile } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  const onFinish = values => {
    updateProfile({ ...user, ...values });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({ ...user, bday: dayjs(user.bday) });
    }
  }, [user]);

  if (!user) {
    return (
      <span>
        <Space className="spin">
          <Spin size="large" />
        </Space>
      </span>
    );
  }

  return (
    <Form
      className="form"
      {...formItemLayout}
      form={form}
      name="editprofile"
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
          <Select.Option value="F">F</Select.Option>
          <Select.Option value="M">M</Select.Option>
          <Select.Option value="none">None</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className="create_button" type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfile;
