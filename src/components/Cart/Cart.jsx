import { useContext, useEffect, useRef, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrderContext } from '../../context/OrdersContext/OrdersState';
import { Button, Table, Modal } from 'antd';
import './Cart.scss';
import { DeleteOutlined } from '@ant-design/icons';

const Cart = () => {
  const { cart, clearCart, clearItem } = useContext(ProductsContext);
  const { createOrder, token } = useContext(OrderContext);

  if (cart.length <= 0) {
    return <span>Your cart is empty</span>;
  }

  const createNewOrder = () => {
    createOrder(cart, token);
    clearCart();
  };

  // const [count, setCount] = useState(2);

  const handleDelete = record => {
    Modal.confirm({
      title: 'Sure to delete?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        // setDataSource(cart => {
        //   return cart.filter(item => item.id !== record.id);
        // });
        clearItem();
      },
    });
  };

  const columns = [
    {
      title: 'product',
      dataIndex: 'product',
      width: '30%',
      key: 'product',
    },
    {
      title: 'price₿',
      dataIndex: 'price₿',
      width: '20%',
      key: 'price₿',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'delete',
      key: 'delete',
      render: record =>
        cart.length >= 1 ? (
          <>
            <DeleteOutlined
              onClick={() => handleDelete(record)}
              style={{ color: 'red', marginLeft: 12 }}
            />
            {/* <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm> */}
          </>
        ) : null,
    },
    {
      title: 'total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  // const handleSave = row => {
  //   const newData = [...dataSource];
  //   const index = newData.findIndex(item => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, {
  //     ...item,
  //     ...row,
  //   });
  //   setDataSource(newData);
  // };

  // const columns = defaultColumns.map(col => {
  //   if (!col.editable) {
  //     return col;
  //   }
  //   return {
  //     ...col,
  //     onCell: record => ({
  //       record,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       handleSave,
  //     }),
  //   };
  // });
  // const cartItem = cart.map((cartItem, i) => {
  //   return (
  //     <div key={i}>
  //       <span>{cartItem.name}</span>
  //       <span>{cartItem.price.toFixed(2)} ₿</span>
  //       <button onClick={() => clearItem()}>clear item</button>
  //     </div>
  //   );
  // });

  return (
    <div>
      <Table columns={columns} bordered dataSource={cart} />

      <Button
        onClick={() => {
          clearCart();
        }}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Clear cart
      </Button>

      <Button
        onClick={() => {
          createNewOrder(cart);
          clearCart();
        }}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Create order
      </Button>
    </div>
  );
};

export default Cart;
//https://ant.design/components/table#components-table-demo-ellipsis-custom-tooltip Editable Cells
//https://www.youtube.com/watch?v=y4_nSE-aZhc
