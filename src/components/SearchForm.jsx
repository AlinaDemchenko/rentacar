import { ImSearch } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectCars } from "../redux/selectors";

function SearchForm() {
  const cars = useSelector(selectCars);

  return (
    <form className="flex w-fit h-16 mb-2.5 py-2 px-4 mx-auto gap-x-8 items-center">
      <div role="group" aria-labelledby="chooseTheCarBrand">
        <label className="label" htmlFor="brand">Car brand</label>
        <input className="input"
          list="brands"
          name="brand"
          id="brand"
          placeholder="Enter the text"
          type="text"
       />
        <datalist id="brands">
          {cars.map((car) => <option>{car.make}</option>)}
        </datalist>
      </div>
      <div role="group" aria-labelledby="choosePrice">
        <label className="label" htmlFor="price">Price/1 hour</label>
        <select id="price" name="price" className="input">
          <option  defaultValue="">To $</option>
          <option  defaultValue="30">30</option>
        </select>
      </div>
      <div className="flex items-center">
      <label className="label" htmlFor="priceRange">Сar mileage/km</label>
      <div role="group" aria-labelledby="chooseMileage" id="priceRange" className="inline w-32">
         <input className="input rounded-e-none border-e-0 w-1/2"
            type="number"
            name="mileage"
            min="0"
            max="200"
            placeholder="From"
          />
             <input className="input rounded-s-none w-1/2"
            type="number"
            name="mileage"
            min="0"
            max="200"
            placeholder="To"
          />
      </div>
      </div>
      <button type="submit" className="button w-16"><ImSearch className="w-5 h-5 block mx-auto"/></button>
    </form>
  );
}

export default SearchForm;
