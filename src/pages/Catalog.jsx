import { useEffect } from "react";
import CarList from "../components/CarList";
import { useDispatch } from "react-redux";
import { getCarsThunk } from "../redux/operation";


function Catalog() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(getCarsThunk())
},[dispatch])

  return (
    <main className="p-5">
        <CarList/>
    </main>
  );
}

export default Catalog;
