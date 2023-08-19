function CarItem({
  handlerOpenDetails,
  carData: {
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
  },
}) {
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
          <p className="text-xl font-semibold">
            {year} <span className="font-thin">| {type}</span>
          </p>
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

export default CarItem;
