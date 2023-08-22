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
                <Space direction="vertical" size={16}>
                  <Space wrap size={10}>
                    <Avatar
                      shape="circle"
                      size="large"
                      icon={<UserOutlined />}
                      alt="Your profile"
                      srcSet=""
                    />
                    |
                  </Space>
                </Space>
              </Link>
            </span>
            <span className="headerCart">
              <Link to="/cart" style={{ marginRight: '5px' }}>
                <Badge
                  count={cart.length}
                  size="small"
                  style={{ marginRight: '5px' }}
                  color="#FF8C00"
                  width="10%"
                >
                  <ShoppingCartOutlined
                    style={{
                      color: '#FF8C00',
                      width: '20%',
                      marginRight: '5px',
                      size: '62px',
                    }}
                  />
                </Badge>
              </Link>
            </span>
            <span>
              <Link to="/">
                | <HomeOutlined />
              </Link>
            </span>
            <span onClick={logoutUser}>
              <Link to="/">
                | <LogoutOutlined />
              </Link>
            </span>
          </div>
        ) : (
          <div className="unloggedMenu">
            <span>
              <Link to="/">
                <HomeOutlined /> |
              </Link>
            </span>
            <span>
              <Link to="/register">
                <PicRightOutlined /> |
              </Link>
            </span>
            <span>
              <Link to="/login">
                <LoginOutlined />
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
