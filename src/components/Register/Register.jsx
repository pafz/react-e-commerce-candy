import React from 'react';
import { useContext, useEffect } from 'react'; // ant.design   is necesary to use useContext???
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  DatePicker,
  Row,
  Select,
} from 'antd';
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
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = values => {
    create(values);
  };

  //FIXME: avoid a kid sign up. In that case, sign up as a user kid by dafult. Avoid an really old date.
  const ofLegalAge = ({ user }) => {
    let year = getFullYear();
    console.log(user.date);
  };
  //FIXME: name validation etc
  //FIXME: captcha working, a link down
  //FIXME: aggrement modal or similar

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
          <Input />
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
          <Input />
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
          <Select placeholder="select your gender">
            <Option value="F">F</Option>
            <Option value="M">M</Option>
            <Option value="none">None</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Please input the captcha you got!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item> */}

        {/* <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item> */}
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
//https://ant.design/components/form   Registration -> Fill in this form to create a new account for you. -> JS
//https://stackoverflow.com/questions/40644615/how-to-use-google-recaptcha-in-the-ant-design-form-component TODO: use captcha https://developers.google.com/recaptcha/old/docs/customization
