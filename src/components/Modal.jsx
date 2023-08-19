import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessoriesExpanded,
  setConditionsExpanded,
  setFunctionalitiesExpanded,
  setModalId,
} from "../redux/slice";
import {
  selectAccessoriesExpanded,
  selectCarData,
  selectConditionsExpanded,
  selectFunctionalitiesExpanded,
} from "../redux/selectors";
import { AiOutlineClose } from "react-icons/ai";

function Modal() {
  const carData = useSelector(selectCarData);
  const dispatch = useDispatch();
  const isAccessoriesExpanded = useSelector(selectAccessoriesExpanded);
  const isFunctionalitiesExpanded = useSelector(selectFunctionalitiesExpanded);
  const isConditionsExpanded = useSelector(selectConditionsExpanded);

  const toggleAccessories = () => {
    if (isFunctionalitiesExpanded) {
      dispatch(setFunctionalitiesExpanded());
    }
    if (isConditionsExpanded) {
      dispatch(setConditionsExpanded());
    }
    dispatch(setAccessoriesExpanded());
  };

  const toggleFunctionalities = () => {
    if (isAccessoriesExpanded) {
      dispatch(setAccessoriesExpanded());
    }
    if (isConditionsExpanded) {
      dispatch(setConditionsExpanded());
    }
    dispatch(setFunctionalitiesExpanded());
  };

  const toggleConditions = () => {
    if (isAccessoriesExpanded) {
      dispatch(setAccessoriesExpanded());
    }
    if (isFunctionalitiesExpanded) {
      dispatch(setFunctionalitiesExpanded());
    }
    dispatch(setConditionsExpanded());
  };

  const handleCloseModal = (event) => {
    if (
      event.code === "Escape" ||
      event.target === event.currentTarget ||
      event.currentTarget.tagName === "BUTTON"
    ) {
      dispatch(setModalId(null));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    document.body.classList.add("modal-open");
    return () => {
      if (isFunctionalitiesExpanded) {
        dispatch(setFunctionalitiesExpanded());
      }
      if (isConditionsExpanded) {
        dispatch(setConditionsExpanded());
      }
      if (isAccessoriesExpanded) {
        dispatch(setAccessoriesExpanded());
      }
      window.removeEventListener("keydown", handleCloseModal);
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div
      onClick={handleCloseModal}
      className="overlay"
    >
      <div className="modal-window">
        <button
          type="button"
          onClick={handleCloseModal}
          className="w-8 h-8 absolute top-1.5 right-1.5"
        >
          <AiOutlineClose className="w-full h-full transition-colors hover:text-orange-800" />
        </button>
        <div className="h-full w-full relative col-span-1">
          <img
            src={carData.img}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={`${carData.make}, ${carData.model}`}
          />
          <a
            className="contact-link"
            href="tel:+380730000000"
          >
            <span className="tracking-[-7px] text-orange-700 ">/</span>
            <span className="tracking-[-10px] text-orange-800 ">/</span>
            <span className="tracking-[-13px] text-orange-900 ">/</span>
            RENTAL CAR
          </a>
        </div>
        <div className="h-full py-3.5 px-1.5 col-span-1">
          <h2 className="text-2xl font-light tracking-wider mb-0.5 mt-2 mr-1.5 whitespace-nowrap">
            {carData.make}
            <span className="text-orange-800"> {carData.model}</span>
          </h2>
          <h3 className="text-lg tracking-wide mb-2.5">
            {carData.rentalCompany},{" "}
            {carData.address.split(", ").slice(-2).join(", ")}
          </h3>
          <ul className="font-extralight">
            <li className=" mb-1.5 mr-2">
              <p className="inline-block">
                {carData.year} | {carData.type}
              </p>{" "}
              <p className="inline-block"> ID: {carData.id}</p>
            </li>
            <li className="mb-px">
              <p>{carData.description}</p>
            </li>
            <li>
              <p>Mileage: {carData.mileage}</p>
            </li>
            <li>
              <p>Fuel consumption: {carData.fuelConsumption}</p>
            </li>
            <li className="flex justify-between mb-2.5">
              <p>Engine size: {carData.engineSize}</p>
              <b className="text-xl font-bold block tracking-wider mr-0.5">
                {carData.rentalPrice}
              </b>
            </li>
          </ul>
          <ul className="text-center text-sm">
            <li onClick={toggleAccessories}>
              <h4 className="accordion-heading"> Accessories</h4>
              {isAccessoriesExpanded && (
                <ul className="expanded-accordion">
                  {carData.accessories.map((accessory, idx) => (
                    <li className="accordion-item" key={idx}>
                      {accessory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={toggleFunctionalities}>
              <h4 className="accordion-heading">Functionalities</h4>
              {isFunctionalitiesExpanded && (
                <ul className="expanded-accordion">
                  {carData.functionalities.map((functionality, idx) => (
                    <li className="accordion-item" key={idx}>
                      {functionality}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={toggleConditions}>
              <h4 className="accordion-heading">Rental conditions</h4>
              {isConditionsExpanded && (
                <ul className="expanded-accordion rounded-b-sm">
                  {carData.rentalConditions
                    .split("\n")
                    .map((condition, idx) => (
                      <li className="accordion-item" key={idx}>
                        {condition}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
