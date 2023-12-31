import { ImSearch } from "react-icons/im";
import { useSelector } from "react-redux";
import {
  selectPriceOptions,
  selectMaxMileage,
  selectMaxPrice,
  selectBrands,
  selectFilter,
} from "../redux/selectors";
import { useFormik } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useEffect } from "react";
import PropTypes from 'prop-types';

function SearchForm({ handlerSetFilter, handlerResetPage, filteredCarList }) {
  const prices = useSelector(selectPriceOptions);
  const maxMileage = useSelector(selectMaxMileage);
  const maxPrice = useSelector(selectMaxPrice);
  const brands = useSelector(selectBrands);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter && filteredCarList.length === 0) toast.info("No cars match");
  }, [filteredCarList, filter]);

  const searchValidationSchema = yup.object().shape({
    mileageFrom: yup
      .number()
      .max(maxMileage, `Enter a number under "${maxMileage}"`)
      .positive("Enter a positive number")
      .integer("Enter a whole number"),
    mileageTo: yup
      .number()
      .max(maxMileage, `Enter a number under "${maxMileage}"`)
      .positive("Enter a positive number")
      .integer("Enter a whole number"),

    brand: yup.string(),
    carPrice: yup.number(),
  });

  const formik = useFormik({
    initialValues: {
      mileageFrom: "",
      mileageTo: "",
      brand: "",
      carPrice: "",
    },
    validationSchema: searchValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const errors = {};
      if (values.mileageFrom !== "" && values.mileageTo !== "") {
        if (values.mileageFrom >= values.mileageTo) {
          errors.mileageTo = "Must be greater than 'From'";
        }
      }
      values.mileageTo =
        values.mileageTo === "" ? maxMileage : values.mileageTo;
      values.carPrice = values.carPrice === "" ? maxPrice : values.carPrice;
      if (Object.keys(errors).length === 0) {
        handlerSetFilter(values);
        handlerResetPage();
        resetForm();
      } else {
        formik.setErrors(errors);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-fit h-16 mb-2.5 py-2 px-4 mx-auto gap-x-8 items-center"
    >
      {filter && (
        <button
          type="button"
          onClick={() => {
            handlerSetFilter(null);
            formik.resetForm();
          }}
          className="text-orange-800 transition-transform hover:scale-125"
        >
          <IoIosArrowBack className="inline w-10 h-10 translate-x-[1.625rem]" />
          <IoIosArrowBack className="inline w-10 h-10" />
        </button>
      )}
      <div role="group" aria-labelledby="chooseTheCarBrand">
        <label className="label" htmlFor="brand">
          Car brand
        </label>
        <input
          className="input"
          list="brands"
          name="brand"
          id="brand"
          placeholder="Enter the text"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
        />
        <datalist id="brands">
          {brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </datalist>
      </div>
      <div
        role="group"
        aria-labelledby="choosePrice"
        className=" w-[230px] grow-0"
      >
        <label className="label" htmlFor="carPrice">
          Price/1 hour
        </label>
        <input
          className="input w-1/3"
          list="prices"
          name="carPrice"
          id="carPrice"
          placeholder="To $"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.carPrice}
        />
        <datalist id="prices">
          {prices.map((price) => (
            <option key={price}>{price}</option>
          ))}
        </datalist>
      </div>
      <div className="flex items-center">
        <label className="label" htmlFor="mileageRange">
          Сar mileage/km
        </label>
        <div
          role="group"
          aria-labelledby="chooseMileage"
          id="mileageRange"
          className="inline w-36 relative"
        >
          <input
            className="input rounded-e-none border-e-0 w-1/2"
            type="number"
            name="mileageFrom"
            placeholder="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mileageFrom}
          />
          {formik.touched.mileageFrom && formik.errors.mileageFrom ? (
            <div className="error-message">{formik.errors.mileageFrom}</div>
          ) : null}
          <input
            className="input rounded-s-none w-1/2"
            type="number"
            name="mileageTo"
            placeholder={maxMileage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mileageTo}
          />
          {formik.touched.mileageTo && formik.errors.mileageTo ? (
            <div className="error-message">{formik.errors.mileageTo}</div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="button w-16"
        disabled={Object.values(formik.values).every((value) => value === "")}
      >
        <ImSearch className="w-5 h-5 block mx-auto" />
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  filteredCarList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities:  PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  })),
  handlerSetFilter: PropTypes.func.isRequired,
  handlerResetPage: PropTypes.func.isRequired,
};

export default SearchForm;
