import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { useParams } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
import './product.scss';

const Product = () => {
  const { getById, product } = useContext(ProductsContext);
  const { id } = useParams();

  useEffect(() => {
    getById(id);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
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
    // {/* // <div>
    // //   <p>Name: {product.name}</p>
    // //   <p>Description: {product.description}</p>
    // //   <p>Favorite: {product.favorite}</p>
    // //   <p>Price: {product.price}</p>
    // // </div> */}
  );
};

export default Product;
