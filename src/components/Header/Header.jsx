import './Header.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { Badge, Avatar, Space } from 'antd';
//TODO: cart_badge change to backgroundColor

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
    <nav className="header_nav">
      <div className="container_header_title">
        <p className="header_title">
          ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ Candy shop ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋
        </p>
      </div>

      <div>
        {token ? (
          <div className="loggedInMenu menu">
            <span>
              <Link to="/profile">
                <UserOutlined className="user_icon" />
              </Link>
            </span>

            <span className="headerCart">
              <Link to="/cart">
                <Badge className="cart_badge" count={cart.length} size="small">
                  <ShoppingCartOutlined className="cart_svg" />
                </Badge>
              </Link>
            </span>

            <span>
              <Link to="/">
                <HomeOutlined className="home_svg" />
              </Link>
            </span>
            {user?.role === 'admin' && (
              <span>
                <Link to="/createproduct">
                  <PlusCircleOutlined className="plus_svg" />
                </Link>
              </span>
            )}
            <span onClick={logoutUser}>
              <Link to="/">
                <LogoutOutlined className="logout_svg" />
              </Link>
            </span>
          </div>
        ) : (
          <div className="unloggedMenu menu">
            <span>
              <Link to="/">
                <HomeOutlined className="home_svg" />
              </Link>
            </span>
            <span>
              <Link to="/register">
                <PicRightOutlined className="register_svg" />
              </Link>
            </span>
            <span>
              <Link to="/login">
                <LoginOutlined className="login_svg" />
              </Link>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
//https://ant.design/components/badge
//https://ant.design/components/avatar
//TODO: https://ant.design/docs/spec/navigation
//TODO: srcSet="" A list of sources to use for different screen resolutions
