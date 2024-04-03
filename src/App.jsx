import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import NotFoundPage from './pages/NotFoundPage';
// import LogIn from './pages/LogIn';
// import Register from './pages/Register';
// import Contacts from './pages/Contacts';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/authSelectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const LogIn = lazy(() => import('./pages/LogIn'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <p>Refreshing user, please wait</p>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RestrictedRoute component={<Register />} />} />
            <Route path="/login" element={<RestrictedRoute component={<LogIn />} />} />
            <Route path="/contacts" element={<PrivateRoute component={<Contacts />} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
