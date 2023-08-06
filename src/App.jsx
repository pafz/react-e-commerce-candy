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

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
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
