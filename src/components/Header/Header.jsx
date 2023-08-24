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
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Badge, Avatar, Space } from 'antd';
//TODO: cart_badge change to backgroundColor

const Header = () => {
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
    <nav className="header_nav">
      <div className="container_header_title">
        <p className="header_title">
          ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ Candy shop ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋
        </p>
      </div>

      <div>
        {token ? (
          <div className="loggedInMenu">
            <span>
              <Link to="/profile">
                <Space direction="vertical" size="small">
                  <Space wrap size={10}>
                    <Avatar
                      shape="circle"
                      size="middle"
                      icon={<UserOutlined className="user_icon" />}
                      alt="Your profile"
                      srcSet=""
                    />
                    |
                  </Space>
                </Space>
              </Link>
            </span>

            <span className="headerCart">
              <Link to="/cart">
                <Badge className="cart_badge" count={cart.length} size="middle">
                  <ShoppingCartOutlined className="cart_svg" />
                </Badge>
              </Link>
            </span>

            <span>
              <Link to="/">
                | <HomeOutlined className="home_svg" />
              </Link>
            </span>

            <span onClick={logoutUser}>
              <Link to="/">
                | <LogoutOutlined className="logout_svg" />
              </Link>
            </span>
          </div>
        ) : (
          <div className="unloggedMenu">
            <span>
              <Link to="/">
                <HomeOutlined className="home_svg" /> |
              </Link>
            </span>
            <span>
              <Link to="/register">
                <PicRightOutlined className="register_svg" /> |
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
