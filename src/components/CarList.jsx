import CarItem from "./CarItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCars,
  selectFilter,
  selectFilteredCarList,
} from "../redux/selectors";
import { useEffect } from "react";
import { toast } from 'react-toastify';

function CarList({handlerOpenDetails}) {
  const cars = useSelector(selectCars);
  const filteredCarList = useSelector(selectFilteredCarList);
  const filter = useSelector(selectFilter);
  const actualCars = filter ? filteredCarList : cars;

  useEffect(()=>{
    if (filter && actualCars.length === 0)
    toast.info("No cars match");
  }, [actualCars, filter])

  return (
    <ul className="grid grid-cols-4 gap-x-0.5 gap-y-8">
      {actualCars.map((car) => (
        <CarItem key={car.id} carData={car} handlerOpenDetails={handlerOpenDetails}/>
      ))}
    </ul>
  );
}

export default CarList;
