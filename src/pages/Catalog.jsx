import { useEffect } from "react";
import CarList from "../components/CarList";
import { useDispatch } from "react-redux";
import { getCarsThunk } from "../redux/operation";
import SearchForm from "../components/SearchForm";
import { setFilter, setModalId } from "../redux/slice";


function Catalog() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(getCarsThunk())
},[dispatch])

const handlerSetFilter = (values)=>{
  dispatch(setFilter(values))
}

const handlerOpenDetails = (id)=>{
  dispatch(setModalId(id))
}

  return (
    <main className="p-5">
      <SearchForm handlerSetFilter={handlerSetFilter}/>
        <CarList handlerOpenDetails={handlerOpenDetails}/>
    </main>
  );
}

export default Catalog;
