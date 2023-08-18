import './Profile.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Table, Divider, List, Typography } from 'antd';
//TODO: change Uppercase Products.map line 36

const columns = [
  { title: 'id', dataIndex: 'id', key: 'id' },
  { title: 'date', dataIndex: 'date', key: 'date' },
  { title: 'total', dataIndex: 'total', key: 'total' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>repurchase</a>,
  },
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
    return <span>Cargando...</span>;
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

  //FIXME: list doesnt have values
  const order = ordersProducts.map(order => {
    return (
      <div key={order.id}>
        <p>hi</p>
        {{ key: order.id, date: order.createdAt, total: order.payment }},
        <span>
          {order.Products.map(product => {
            return (
              <span>
                {product.id} - {product.name}
              </span>
            );
          })}
        </span>
      </div>
    );
  });

  console.log(ordersProducts);
  return (
    <>
      <div className="div_list_user_profile">
        <List
          size="small"
          header={<div className="header-footer">Your profile</div>}
          footer={<div className="header-footer">Your profile</div>}
          bordered
          grid={{ gutter: 12, column: 2 }}
          //TODO: loading SpinProps
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
          expandable={{
            expandedRowRender: product => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {product.name}
              </p>
            ),
            rowExpandable: product => product.name !== 'Not Expandable',
          }}
          dataSource={order}
        />
        <div>
          <ul>
            {ordersProducts.map(order => {
              return (
                <li key={order.id}>
                  {order.id} - {order.createdAt} - TOTAL: {order.payment}
                  <ul>
                    {order.Products.map(product => {
                      return (
                        <li>
                          {product.id} - {product.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
//https://ant.design/components/table#components-table-demo-ellipsis-custom-tooltip
