import SearchForm from "../components/SearchForm";
import CarList from "../components/CarList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsThunk } from "../redux/operation";
import { setFilter, setModalId, setPage } from "../redux/slice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCars,
  selectFilter,
  selectFilteredCarList,
  selectPaginatedCarsArray,
} from "../redux/selectors";
import { toast } from "react-toastify";

function Catalog() {
  const dispatch = useDispatch();
  const filteredCarList = useSelector(selectFilteredCarList);
  const filter = useSelector(selectFilter);
  const paginatedCarsArray = useSelector(selectPaginatedCarsArray);
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (filter && filteredCarList === 0) toast.info("No cars match");
  }, [filteredCarList, filter]);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const handlerResetPage = () => {
    dispatch(setPage(1));
  };

  const handlerSetFilter = (values) => {
    dispatch(setFilter(values));
  };

  const handlerOpenDetails = (id) => {
    dispatch(setModalId(id));
  };

  const handlerUpload = () => {
    dispatch(setPage());
  };

  return (
    <main className="p-5">
      <SearchForm
        handlerSetFilter={handlerSetFilter}
        handlerResetPage={handlerResetPage}
      />
      <CarList
        handlerOpenDetails={handlerOpenDetails}
        cars={paginatedCarsArray}
      />
      <button
        type="button"
        onClick={handlerUpload}
        disabled={
          (filter && filteredCarList.length <= paginatedCarsArray.length) ||
          (!filter && cars.length <= paginatedCarsArray.length)
        }
        className="button bg-transparent mx-auto block text-sm text-orange-800 border w-1/4 disabled:hover:shadow-none border-orange-800 hover:shadow-[0_6px_20px_-3px_rgba(0,0,0,0.3)_inset,0_6px_16px_-6px_rgba(0,0,0,0.3)_inset]"
      >
        LOAD MORE
      </button>
    </main>
  );
}

export default Catalog;
