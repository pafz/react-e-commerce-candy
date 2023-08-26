import React from 'react';
import './CreateProduct.scss';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { SettingOutlined } from '@ant-design/icons';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
////

const BitcoinSvg = () => {
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"></path>
  </svg>;
};

const BitcoinIcon = props => <Icon component={BitcoinSvg} {...props} />;

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
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
      span: 14,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const selectBefore = (
  <Select
    defaultValue="add"
    style={{
      width: 60,
    }}
  >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);

<Option value="BTC">₿</Option>;

const CreateProduct = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="create_container">
      <Form
        className="form"
        {...formItemLayout}
        form={form}
        name="create"
        onFinish={onFinish}
        //TODO: onFinishFailed={onFinishFailed}
        autoComplete="off"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          hasFeedback
          placeholder="The commercial name"
          rules={[
            {
              required: true,
              message: 'Please input the commercial name',
              whitespace: true,
            },
          ]}
        >
          <Input id="name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input a description about the product',
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea allowClear showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="favorite"
          label="Favorite"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please describe it in one word',
              whitespace: false,
            },
          ]}
        >
          <Input
            placeholder="Describe it in one word"
            id="success"
            prefix={<HeartIcon className="heart_icon" />}
          />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input the price',
            },
          ]}
        >
          <div className="input_price">
            <InputNumber defaultValue={0} />
          </div>
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          validateStatus="category"
          rules={[
            {
              required: true,
              message: 'Please input a category',
            },
          ]}
        >
          <Select placeholder="Category Id" allowClear>
            <Option value="1">honey</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="company"
          label="Company"
          validateStatus="company"
          rules={[
            {
              required: true,
              message: 'Please input the company',
            },
          ]}
        >
          <Select placeholder="Company Id" allowClear>
            <Option value="1">Mars Inc</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
        </Form.Item>

        {/* <Form.Item
        label="Warning"
        hasFeedback
        validateStatus="warning"
        help="Need to be checked"
      >
        <TreeSelect
          placeholder="I'm TreeSelect"
          treeData={[
            {
              value: 'xx',
              label: 'xx',
            },
          ]}
          allowClear
        />
      </Form.Item> */}

        <Button className="create_button" type="primary" htmlType="submit">
          Create product
        </Button>
      </Form>
      {/* <Space direction="vertical">
        <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
        <InputNumber
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue={100}
        />
        <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
      </Space> */}
    </div>
  );
};

export default CreateProduct;
