import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";

function CarItem({ handlerOpenDetails, handleToggleFavorites, carData }) {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    address,
  } = carData;

  const favorites = useSelector(selectFavorites);
  const isCarFavorite = favorites.length
    ? favorites.find((car) => car.id === id)
    : false;

  const descriptionSplit =
    description?.length > 220
      ? description.split("").splice(0, 220).join("") + "..."
      : description;

  return (
    <li className="relative p-1 h-[700px]">
      <div className="w-full h-80 overflow-hidden mb-12 rounded-sm">
        <img
          src={img}
          alt={model}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>
      <b className="price">{rentalPrice}</b>
      <h2 className="text-xl font-light tracking-wider mb-2">
        {make}
        <span className="text-orange-800"> {model}</span>
      </h2>
      <ul>
        <li className="mb-1">
          <p className="text-xl font-semibold inline mr-1">
            {year} <span className="font-thin">| {type}</span>
          </p>
          <button
            className="inline font-normal align-sub"
            onClick={() => {
              handleToggleFavorites(carData);
            }}
          >
            {isCarFavorite ? (
              <AiFillStar className="h-6 w-6 text-orange-800" />
            ) : (
              <AiOutlineStar className="h-6 w-6" />
            )}
          </button>
        </li>
        <li className="pr-1.5 mb-1.5">
          <p className="font-extralight">{descriptionSplit}</p>
        </li>
        <li>
          <p>
            {rentalCompany}, {address.split(", ").slice(-2).join(", ")}
          </p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          handlerOpenDetails(id);
        }}
        className="button w-5/6 absolute bottom-3 translate-x-1/2 right-1/2"
      >
        LEARN MORE
      </button>
    </li>
  );
}

CarItem.propTypes = {
  carData: PropTypes.shape({
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
  }).isRequired,
  handleToggleFavorites: PropTypes.func.isRequired,
  handlerOpenDetails: PropTypes.func.isRequired,
};

export default CarItem;
