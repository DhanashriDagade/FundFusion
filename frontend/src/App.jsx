import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar.jsx';
import Home from './assets/pages/Home';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login';
import Dashboard from './assets/pages/Dashboard';
import UpdatePassword from './assets/pages/UpdatePassword';
import ContactUs from './assets/pages/ContactUs';
import AboutUs from './assets/pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
