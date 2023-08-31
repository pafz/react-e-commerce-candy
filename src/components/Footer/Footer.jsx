import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { UserContext } from '../../context/UserContext/UserState';

const Footer = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="footer">
      <div>Candy Shop 2023 ®</div>
      <div>Patricia Fernández Zamanillo</div>
    </div>
  );
};

export default Footer;
