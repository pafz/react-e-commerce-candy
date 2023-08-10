import './Header.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

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
    <nav className="header">
      <span>≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋ Header ≂ ≃ ≄ ≅ ≆ ≇ ≈ ≉ ≊ ≋</span>

      <div>
        {token ? (
          <>
            <span onClick={logoutUser}>
              <Link to="/">Logout | </Link>
            </span>
            <span>
              <Link to="/profile">Profile | </Link>
            </span>
            <span>
              <Link to="/cart">Cart | </Link>
            </span>
            <span>
              <Link to="/">Home | </Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/">| Home | </Link>
            </span>
            <span>
              <Link to="/register"> Register | </Link>
            </span>
            <span>
              <Link to="/login">Login | </Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
