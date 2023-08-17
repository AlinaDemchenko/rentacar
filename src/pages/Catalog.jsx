import { useEffect } from "react";
import CarList from "../components/CarList";
import { useDispatch } from "react-redux";
import { getCarsThunk } from "../redux/operation";
import SearchForm from "../components/SearchForm";


function Catalog() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(getCarsThunk())
},[dispatch])

  return (
    <main className="p-5">
      <SearchForm/>
        <CarList/>
    </main>
  );
}

export default Catalog;
