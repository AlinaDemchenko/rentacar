function CarItem({
  carData: {
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  },
}) {
  console.log(img);
  return (
    <li className="relative p-1">
      <div className="w-full h-56 overflow-hidden mb-12 rounded-sm">
      <img src={img} alt={model} className="object-cover w-full h-full"/>
      </div>
      <b className="absolute right-0 top-[11.5rem] text-2xl border-2 border-orange-800 shadow-2xl rounded-full p-2.5 block w-24 h-24 flex justify-center items-center bg-white/10 backdrop-blur">{rentalPrice}</b>
      <h2 className="text-xl font-light tracking-wider mb-2">
        {make}
        <span className="text-orange-800"> {model}</span>
      </h2>
      <ul className="pr-1.5">
        <li>
          <p className="text-xl font-semibold mb-1">{year}</p>
        </li>
        <li>
        <p className="font-extralight">{description}</p>
        </li>
        <li>
          <p>type: {type}</p>
        </li>
        {/* <li>
          <p>fuel consumption: {fuelConsumption}</p>
        </li>
        <li>
          <p>engine size: {engineSize}</p>
        </li>
        <li>
          <p>accessories: {accessories}</p>
        </li>
        <li>
          <p>functionalities: {functionalities}</p>
        </li> */}
        <li>
          <p>rental company: {rentalCompany}</p>
        </li>
        <li>
          <p>address: {address.split(", ").slice(-2).join(", ")}</p>
        </li>
        {/* <li>
          <p>rental conditions: {rentalConditions}</p>
        </li>
        <li>
          <p>mileage: {mileage}</p>
        </li> */}
      </ul>
      <button type="button">Learn more</button>
    </li>
  );
}

export default CarItem;
