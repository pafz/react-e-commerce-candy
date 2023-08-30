import React from 'react';
import './Footer.scss';
import { Link, useNavigate } from 'react-router-dom';
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
    <nav className="menu footer_nav">
      {token ? (
        <>
          <span>
            <Link to="/profile">Profile</Link>
          </span>
          <span className="headerCart">
            <Link to="/cart">Cart</Link>
          </span>
          <span>
            <Link to="/">Products</Link>
          </span>
          <span onClick={logoutUser}>
            <Link to="/">Logout</Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to="/">Products</Link>
          </span>
          <span>
            <Link to="/register"> Register</Link>
          </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </>
      )}
    </nav>
  );
};

export default Footer;
