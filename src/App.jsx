import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { UserProvider } from './context/UserContext/UserState';
import Footer from './components/Footer/Footer';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
          </ProductsProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
