import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy} from "react";
import { selectLoading, selectModalId } from "./redux/selectors";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import Notification from "./components/Notification";
import Loader from "./components/Loader";

const Favorites = lazy(() => import("./pages/Favorites"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const isLoading = useSelector(selectLoading);
  const modal = useSelector(selectModalId);

return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Notification />
      {isLoading && <Loader />}
      {modal && <Modal />}
    </>
  );
}

export default App;
