import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  PicRightOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const Header = () => {
  const { token, logout, user, getUserInfo } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="header_title">
        ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ Candy shop ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋
      </div>

      <nav className="header_nav">
        {token ? (
          <div className="loggedInMenu menu">
            <span>
              <Link to="/profile">
                <UserOutlined className="user_icon" /> Profile
              </Link>
            </span>

            <span className="headerCart">
              <Badge className="cart_badge" count={cart.length} size="small">
                <Link to="/cart">
                  <ShoppingCartOutlined className="cart_svg" /> Cart
                </Link>
              </Badge>
            </span>

            <span>
              <Link to="/">
                <HomeOutlined className="home_svg" /> Home
              </Link>
            </span>
            {user?.role === 'admin' && (
              <span>
                <Link to="/createproduct">
                  <PlusCircleOutlined className="plus_svg" /> Create Product
                </Link>
              </span>
            )}
            <span onClick={logoutUser}>
              <Link to="/">
                <LogoutOutlined className="logout_svg" /> Logout
              </Link>
            </span>
          </div>
        ) : (
          <div className="unloggedMenu menu">
            <span>
              <Link to="/">
                <HomeOutlined className="home_svg" /> Home
              </Link>
            </span>
            <span>
              <Link to="/register">
                <PicRightOutlined className="register_svg" /> Register
              </Link>
            </span>
            <span>
              <Link to="/login">
                <LoginOutlined className="login_svg" /> Login
              </Link>
            </span>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
