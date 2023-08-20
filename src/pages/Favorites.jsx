import SearchForm from "../components/SearchForm";
import CarList from "../components/CarList";
import LoadButton from "../components/LoadButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFavorites,
  setFilter,
  setModalId,
  setPage,
} from "../redux/slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectFavorites,
  selectFilter,
  selectFilteredFavorites,
  selectPaginatedFavorites,
} from "../redux/selectors";

function Favorites() {
  const dispatch = useDispatch();
  const filteredFavorites = useSelector(selectFilteredFavorites);
  const filter = useSelector(selectFilter);
  const paginatedFavorites = useSelector(selectPaginatedFavorites);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);

  const resetPage = () => {
    dispatch(setPage(1));
  };

  const setSearchFilter = (values) => {
    dispatch(setFilter(values));
  };

  const openDetails = (id) => {
    dispatch(setModalId(id));
  };

  const uploadCars = () => {
    dispatch(setPage());
  };

  const toggleFavorites = (newCar) => {
    const isFavorite = favorites.find((car) => car.id === newCar.id);
    dispatch(deleteFavorites(isFavorite.id));
  };

  const isButtonHidden =
    (filter && filteredFavorites.length <= paginatedFavorites.length) ||
    (!filter && favorites.length <= paginatedFavorites.length);

  return (
    <main className="p-5">
      <SearchForm
        handlerSetFilter={setSearchFilter}
        handlerResetPage={resetPage}
        filteredCarList={filteredFavorites}
      />
      <CarList
        handlerOpenDetails={openDetails}
        cars={paginatedFavorites}
        handleToggleFavorites={toggleFavorites}
      />
      {!isButtonHidden && <LoadButton handleUploadCars={uploadCars} />}
    </main>
  );
}

export default Favorites;
