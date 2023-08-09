import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { UserProvider } from './context/UserContext/UserState';
import Footer from './components/Footer/Footer';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </OrdersProvider>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
