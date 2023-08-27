import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input, Slider, Card, Button } from 'antd';
import './../../colors.scss';
import './Products.scss';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DeleteOutlined,
  RedoOutlined,
} from '@ant-design/icons';
//TODO: usar button como component
//TODO: Product context

const { Search } = Input;

const Products = () => {
  //TODO: button to findAll again after search???
  const { getProducts, products, addCart, filters, setFilters } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts(filters);
  }, [filters]);

  const product = products.map(product => {
    return (
      <div key={product.id}>
        <nav>
          <Link to={'/product/' + product.id}>{product.name}</Link>
        </nav>
        <span>{product.price.toFixed(2)}</span>
        <button onClick={() => addCart(product)}>Add Cart</button>
      </div>
    );
  });

  return (
    <>
      <div className="products_search">
        <Space direction="vertical">
          <Search
            className="search_text"
            placeholder="search product"
            onSearch={searchTerm => {
              setFilters({ name: searchTerm });
            }}
          />
        </Space>
        <div className="search_price_text">
          <p className="search_price">
            search ₿
            <CaretUpOutlined
              className="anticon"
              onClick={() => {
                console.log('up');
              }}
            />
            <CaretDownOutlined
              className="anticon"
              onClick={() => {
                console.log('up');
              }}
            />
          </p>

          <Slider
            range={{
              draggableTrack: true,
            }}
            max={40}
            defaultValue={[1, 10]}
            onAfterChange={([low, high]) => {
              setFilters({ low, high });
            }}
          />
        </div>
      </div>
      <div className="products-container">
        {products.map(product => {
          return (
            <Card
              className="card"
              key={product.id}
              hoverable
              title={product.favorite}
              cover={
                <img
                  alt={product.name}
                  src="./../../public/img/placeholder.png"
                />
              }
            >
              <nav className="product_name">
                <Link to={'/product/' + product.id}>{product.name}</Link>
              </nav>

              <Space className="site-button-ghost-wrapper" wrap>
                <Button ghost onClick={() => addCart(product)}>
                  Add Cart
                </Button>
              </Space>
              <p>{product.price.toFixed(2)} ₿</p>

              <div className="buttons_delete_update">
                <Space className="site-button-ghost-wrapper" wrap>
                  <Button className="delete_button" type="primary">
                    <DeleteOutlined />
                  </Button>
                </Space>

                <Space className="site-button-ghost-wrapper" wrap>
                  <Button className="update_button" type="primary">
                    <RedoOutlined className="redo_svg" />
                  </Button>
                </Space>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Products;
//https://ant.design/components/card
//https://ant.design/components/button
//https://ant.design/components/icon
