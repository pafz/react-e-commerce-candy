import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { useParams } from 'react-router-dom';
import { Col, Divider, Row, Space, Spin } from 'antd';
import './product.scss';

const Product = () => {
  const { getById, product } = useContext(ProductsContext);
  const { id } = useParams();

  useEffect(() => {
    getById(id);
  }, []);

  if (!product) {
    return (
      <span>
        <Space className="spin">
          <Spin size="large" />
        </Space>
      </span>
    );
  }
  console.log(product);
  return (
    <div className="container">
      <Divider orientation="left">Name</Divider>
      <Row>
        <Col flex={2}>{product.name}</Col>
      </Row>
      <Divider orientation="left">Description</Divider>
      <Row>
        <Col flex="100px"></Col>
        <Col flex="auto">{product.description}</Col>
      </Row>
      <Divider orientation="left">Favorite</Divider>
      <Row>
        <Col flex={2}>{product.favorite}</Col>
      </Row>
      <Divider orientation="left">Price ₿</Divider>
      <Row>
        <Col flex={2}>{product.price}</Col>
      </Row>
    </div>
  );
};

export default Product;
