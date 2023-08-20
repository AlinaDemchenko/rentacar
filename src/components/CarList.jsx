import CarItem from "./CarItem";
import PropTypes from 'prop-types';

function CarList({handlerOpenDetails, cars, handleToggleFavorites}) {

  return (
    <ul className="grid grid-cols-4 gap-x-0.5 gap-y-8 mb-3">
      {cars.map((car) => (
        <CarItem key={car.id} carData={car} handlerOpenDetails={handlerOpenDetails} handleToggleFavorites={handleToggleFavorites}/>
      ))}
    </ul>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string,
    img: PropTypes.string.isRequired,
    description: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities:  PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  })).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  handlerOpenDetails: PropTypes.func.isRequired,
};

export default CarList;
