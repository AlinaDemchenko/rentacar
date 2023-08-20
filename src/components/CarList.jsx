import CarItem from "./CarItem";

function CarList({handlerOpenDetails, cars, handleToggleFavorites}) {

  return (
    <ul className="grid grid-cols-4 gap-x-0.5 gap-y-8 mb-3">
      {cars.map((car) => (
        <CarItem key={car.id} carData={car} handlerOpenDetails={handlerOpenDetails} handleToggleFavorites={handleToggleFavorites}/>
      ))}
    </ul>
  );
}

export default CarList;
