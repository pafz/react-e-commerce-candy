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
    return (
      <div className="cart_products">
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  const createNewOrder = (cart, token) => {
    createOrder(cart, token);
    clearCart();
  };

  const handleDelete = record => {
    Modal.confirm({
      title: 'Sure to delete?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        clearItem();
      },
    });
  };

  const columns = [
    {
      title: 'product',
      dataIndex: 'name',
      width: '30%',
      key: 'product',
    },
    {
      title: 'price ₿',
      dataIndex: 'price',
      width: '20%',
      key: 'price₿',
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
          </>
        ) : null,
    },
  ];

  return (
    <div className="cart_products">
      <Table
        columns={columns}
        bordered
        dataSource={cart}
        style={{
          border: '1px solid #f49cbb',
          boxShadow: '5px 10px #cbeef3',
          borderBlockEnd: '1px solid black',
          borderRadius: '6px',
        }}
      />

      <div className="buttons">
        <Button
          className="clear_button"
          onClick={() => {
            clearCart();
          }}
          type="primary"
          style={{ backgroundColor: '#FF0080' }}
        >
          Clear cart
        </Button>

        <Button
          className="create_button"
          onClick={() => {
            createNewOrder(cart, token);
          }}
          type="primary"
          style={{ backgroundColor: '#40E0D0' }}
        >
          Create order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
//https://ant.design/components/table#components-table-demo-ellipsis-custom-tooltip Editable Cells
//https://www.youtube.com/watch?v=y4_nSE-aZhc
