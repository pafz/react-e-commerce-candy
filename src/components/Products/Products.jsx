import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input, Slider, Card, Button, Popconfirm } from 'antd';
import './../../colors.scss';
import './Products.scss';
import { DeleteOutlined, RedoOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext/UserState';

const { Search } = Input;

const Products = () => {
  const { getProducts, products, addCart, filters, setFilters, deleteProduct } =
    useContext(ProductsContext);

  const { user } = useContext(UserContext);

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
        <Space>
          Name
          <Search
            className="search_text"
            placeholder="search product"
            onSearch={searchTerm => {
              setFilters({ name: searchTerm });
            }}
          />
        </Space>
        <Space className="price">
          Price
          <Slider
            className="slider"
            range={{
              draggableTrack: true,
            }}
            max={40}
            defaultValue={[1, 10]}
            onAfterChange={([low, high]) => {
              setFilters({ low, high });
            }}
          />
        </Space>
      </div>
      <div className="products-container">
        {products.map(product => {
          return (
            <Card
              className="card product"
              key={product.id}
              hoverable
              title={
                <Link className="name" to={'/product/' + product.id}>
                  {product.name}
                </Link>
              }
              cover={
                <img
                  alt={product.name}
                  src="./../../public/img/placeholder.png"
                />
              }
            >
              <div>{product.favorite}</div>

              <Space>
                <Button
                  className="price"
                  type="button"
                  onClick={() => addCart(product)}
                >
                  Add to cart {product.price.toFixed(2)} ₿
                </Button>
              </Space>
              {user?.role === 'admin' && (
                <div className="buttons_delete_update">
                  <Button type="button">
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => deleteProduct(product)}
                    >
                      <DeleteOutlined className="delete_svg" /> Delete
                    </Popconfirm>
                  </Button>

                  <Link to={'/editproduct/' + product.id}>
                    <RedoOutlined className="redo_svg" /> Update
                  </Link>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Products;
