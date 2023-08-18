import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalId } from "../redux/slice";
import { selectModalId } from "../redux/selectors";

function Modal({ onClose }) {
  const carId = useSelector(selectModalId);
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      dispatch(setModalId(null));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div>CAR: {carId}</div>;
}

export default Modal;
