import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input, Slider, Card, Button } from 'antd';
import './../../colors.scss';
import './Products.scss';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
//TODO: usar button como component

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
      <div
        className="products_search"
        style={{
          margin: 'auto',
          width: '50%',
          alignItems: 'center',
          border: '3px solid green',
          padding: '1%',
        }}
      >
        <Space direction="vertical">
          <Search
            className="search_text"
            placeholder="search product"
            onSearch={searchTerm => {
              setFilters({ name: searchTerm });
            }}
          />
        </Space>
        //TODO: Product context
        <div className="search_price_text">
          <p className="search_price">
            search ₿
            <CaretUpOutlined
              className="ant_icon"
              onClick={() => {
                console.log('up');
              }}
            />
            <CaretDownOutlined
              className="ant_icon"
              onClick={() => {
                console.log('up');
              }}
            />
          </p>

          <Slider
            style={{ color: 'green' }}
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
              key={product.id}
              hoverable
              style={{
                width: 240,
                border: '1px solid #f49cbb',
                boxShadow: '5px 10px #cbeef3',
                borderBlockEnd: '1px solid black',
                margin: '1%',
              }}
              title={product.favorite}
              cover={
                <img
                  alt={product.name}
                  src="./../../public/img/placeholder.png"
                />
              }
            >
              <nav className="product_name">
                <Link
                  to={'/product/' + product.id}
                  style={{
                    fontSize: '150%',
                  }}
                >
                  {product.name}
                </Link>
              </nav>

              <Space className="site-button-ghost-wrapper" wrap>
                <Button ghost onClick={() => addCart(product)} style={{}}>
                  Add Cart
                </Button>
              </Space>
              <p>{product.price.toFixed(2)} ₿</p>
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
