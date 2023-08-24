import { useContext, useEffect, useRef, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrderContext } from '../../context/OrdersContext/OrdersState';
import { Button, Table, Popconfirm } from 'antd';
import './Cart.scss';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';

const Cart = () => {
  const { cart, clearCart, clearItem } = useContext(ProductsContext);
  const { createOrder, token } = useContext(OrderContext);

  if (cart.length <= 0) {
    return (
      <div className="cart_products">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  const createNewOrder = (cart, token) => {
    createOrder(cart, token);
    clearCart();
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
      render: (text, record, index) => {
        console.log(index);
        return (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => clearItem(index)}
          >
            <Button type="primary" className="delete_button">
              <DeleteOutlined />
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const products = cart.map((product, index) => ({ ...product, key: index }));

  return (
    <div className="cart_products">
      <Table
        className="table_cart"
        columns={columns}
        bordered
        dataSource={products}
        rowKey="key"
      />

      <div className="buttons">
        <Button
          className="clear_button"
          onClick={() => {
            clearCart();
          }}
          type="primary"
        >
          <DeleteOutlined />
          Clear cart
        </Button>

        <Button
          className="create_button"
          onClick={() => {
            createNewOrder(cart, token);
          }}
          type="primary"
        >
          Create order
          <CheckOutlined className="check_svg" />
        </Button>
      </div>
    </div>
  );
};

export default Cart;
//https://ant.design/components/table#components-table-demo-ellipsis-custom-tooltip Editable Cells
//https://www.youtube.com/watch?v=y4_nSE-aZhc
