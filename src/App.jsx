import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
