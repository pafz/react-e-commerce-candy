import './Profile.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Table, List, Spin, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'order id', dataIndex: 'id', key: 'id' },
  { title: 'date', dataIndex: 'createdAt', key: 'date' },
];

const Profile = () => {
  const { getUserInfo, getOrdersAndProducts, user, ordersProducts } =
    useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getOrdersAndProducts();
  }, []);

  if (!user) {
    return (
      <span>
        <Space className="spin">
          <Spin size="large" />
        </Space>
      </span>
    );
  }

  const dataUser = [
    'name:',
    user.name,
    'bday:',
    user.bday,
    'mail:',
    user.mail,
    'role:',
    user.role,
    'updatedAt:',
    user.updatedAt,
    <Link to={'/editprofile/'}>
      Edit <EditOutlined />
    </Link>,
  ];

  return (
    <>
      <div className="div_list_user_profile">
        <List
          className="list_profile"
          size="small"
          header={<div className="header-footer">{user.name}'s profile</div>}
          footer={<div className="header-footer">{user.name}'s profile</div>}
          bordered
          grid={{ gutter: 12, column: 2 }}
          dataSource={dataUser}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>

      <div className="div_table_user_profile_products">
        <Table
          className="table_profile"
          columns={columns}
          dataSource={ordersProducts}
          rowKey="id"
          expandable={{
            expandedRowRender: order => (
              <ul>
                {order.OrderProducts.map(orderProduct => (
                  <li className="li_profile" key={orderProduct.id}>
                    {orderProduct.Product.name}
                  </li>
                ))}
              </ul>
            ),
            rowExpandable: product => product.name !== 'Not Expandable',
          }}
        />
      </div>
    </>
  );
};

export default Profile;
