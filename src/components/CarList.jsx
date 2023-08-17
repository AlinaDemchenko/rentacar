import CarItem from "./CarItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCars } from "../redux/selectors";

function CarList() {
  const cars = useSelector(selectCars);
  return (
    <ul className="grid grid-cols-4 gap-x-0.5 gap-y-8">
      {cars.map(
        (car) => (
          <CarItem key={car.id} carData={car} id={car.id}/>
        )
      )}
    </ul>
  );
}

export default CarList;
