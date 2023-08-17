import { Route, Routes, Navigate } from 'react-router-dom';
// import { selectLoading } from './redux/selectors';
// import { useSelector, useDispatch } from 'react-redux';
import { lazy} from 'react';
import Layout from './components/Layout';

const Favorites = lazy(() => import('./pages/Favorites'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Home = lazy(() => import('./pages/Home'));

function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    );
  };
export default App; 
