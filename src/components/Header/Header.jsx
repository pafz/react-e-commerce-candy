import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
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
    localStorage.setItem('card', JSON.stringify(cart));
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
              <Link to="/home">Home | </Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/home">Home | </Link>
            </span>
            <span>
              <Link to="/">Login | </Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
