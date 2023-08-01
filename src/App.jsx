import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { UserProvider } from './context/UserContext/UserState';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
