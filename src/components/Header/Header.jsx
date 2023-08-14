import './Header.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { ShoppingCartOutlined } from '@ant-design/icons';
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
    <nav className="headerNav">
      <span className="headerTitle">
        ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ Candy shop ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋
      </span>

      <div>
        {token ? (
          <div className="loggedInMenu">
            <span onClick={logoutUser}>
              <Link to="/">Logout | </Link>
            </span>
            <span>
              <Link to="/profile">
                <Space direction="vertical" size={16}>
                  <Space wrap size={16}>
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
              <Link to="/"> | Home | </Link>
            </span>
          </div>
        ) : (
          <div className="unloggedMenu">
            <span>
              <Link to="/">| Home | </Link>
            </span>
            <span>
              <Link to="/register"> Register | </Link>
            </span>
            <span>
              <Link to="/login">Login | </Link>
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
//TODO: srcSet="" A list of sources to use for different screen resolutions
