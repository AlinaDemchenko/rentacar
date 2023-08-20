import SearchForm from "../components/SearchForm";
import CarList from "../components/CarList";
import LoadButton from "../components/LoadButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsThunk } from "../redux/operation";
import {
  deleteFavorites,
  pushFavorites,
  setFilter,
  setModalId,
  setPage,
} from "../redux/slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCars,
  selectFavorites,
  selectFilter,
  selectFilteredCarList,
  selectPaginatedCarsArray,
} from "../redux/selectors";

function Catalog() {
  const dispatch = useDispatch();
  const filteredCarList = useSelector(selectFilteredCarList);
  const filter = useSelector(selectFilter);
  const paginatedCarsArray = useSelector(selectPaginatedCarsArray);
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getCarsThunk());
    dispatch(setFilter(null))
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
    if (favorites.length) {
      const isFavorite = favorites.find((car) => {
        return car.id === newCar.id;
      });
      if (isFavorite) {
        dispatch(deleteFavorites(isFavorite.id));
        return;
      }
    }
    dispatch(pushFavorites(newCar));
  };

  const isButtonHidden =
    (filter && filteredCarList.length <= paginatedCarsArray.length) ||
    (!filter && cars.length <= paginatedCarsArray.length);

  return (
    <main className="p-5">
      <SearchForm
        handlerSetFilter={setSearchFilter}
        handlerResetPage={resetPage}
        filteredCarList={filteredCarList}
      />
      <CarList
        handlerOpenDetails={openDetails}
        cars={paginatedCarsArray}
        handleToggleFavorites={toggleFavorites}
      />
      {!isButtonHidden && <LoadButton handleUploadCars={uploadCars}/>}
    </main>
  );
}

export default Catalog;
