import './Profile.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Table, Divider, List, Typography, Spin, Space } from 'antd';
//TODO: change Uppercase Products.map line 36

const columns = [
  { title: 'id', dataIndex: 'id', key: 'id' },
  { title: 'date', dataIndex: 'createdAt', key: 'date' },
  { title: 'total ₿', dataIndex: 'payment', key: 'total' },
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
          <Spin size="large" tip="Loading" />
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
  ];

  return (
    <>
      <div className="div_list_user_profile">
        <List
          size="small"
          header={<div className="header-footer">{user.name}'s profile</div>}
          footer={<div className="header-footer">{user.name}'s profile</div>}
          bordered
          grid={{ gutter: 12, column: 2 }}
          style={{
            border: '1px solid #f49cbb',
            boxShadow: '5px 10px #cbeef3',
            borderBlockEnd: '1px solid black',
          }}
          dataSource={dataUser}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>

      <div className="div_table_user_profile_products">
        <Table
          columns={columns}
          dataSource={ordersProducts}
          rowKey="id"
          expandable={{
            expandedRowRender: order => (
              <ul>
                {order.Products.map(product => (
                  <li key={product.id}>{product.name}</li>
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
//https://ant.design/components/form
//https://ant.design/components/table#components-table-demo-ellipsis-custom-tooltip
//https://ant.design/components/spin
