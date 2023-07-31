import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
