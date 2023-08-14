import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Link } from 'react-router-dom';
import { Space, Input } from 'antd';
import { Slider, Switch } from 'antd';

const { Search } = Input;

const Products = () => {
  //if searchTerm is empty -> not search
  const { getProducts, products, addCart, filters, setFilters } =
    useContext(ProductsContext);

  const [disabled, setDisabled] = useState(false);

  const onChange = checked => {
    setDisabled(checked);
  };

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
      <Space direction="vertical">
        <Search
          placeholder="search product"
          onSearch={searchTerm => {
            setFilters({ name: searchTerm });
          }}
          style={{
            width: 200,
          }}
        />
      </Space>
      <Slider
        range={{
          draggableTrack: true,
        }}
        max={40}
        defaultValue={[1, 10]}
        disabled={disabled}
        onAfterChange={([low, high]) => {
          setFilters({ low, high });
        }}
      />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
      <div>{product}</div>
    </>
  );
};

export default Products;
