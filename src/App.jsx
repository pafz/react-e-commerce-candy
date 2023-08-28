import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { UserProvider } from './context/UserContext/UserState';
import Footer from './components/Footer/Footer';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import Register from './components/Register/Register';
import CreateProduct from './components/CreateProduct/CreateProduct';
import EditProduct from './components/EditProduct/EditProduct';

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
                <Route path="/product/:id" element={<Product />} />
                <Route path="/createproduct" element={<CreateProduct />} />
                <Route path="/editproduct/:id" element={<EditProduct />} />
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
