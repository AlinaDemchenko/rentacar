import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars;
export const selectFavorites = (state) => state.favorites;
export const selectFilter = (state) => state.filter;

export const selectLoading = (state) => state.root.isLoading;
export const selectError = (state) => state.root.error;

export const selectModalId = (state) => state.modalId;
export const selectAccessoriesExpanded = (state) =>
  state.isAccordionExpanded.accessories;
export const selectFunctionalitiesExpanded = (state) =>
  state.isAccordionExpanded.functionalities;
export const selectConditionsExpanded = (state) =>
  state.isAccordionExpanded.conditions;

export const selectPage = (state) => state.page;

export const selectPriceOptions = createSelector([selectCars], (cars) => {
  const rentalPrices = cars.map((obj) =>
    parseInt(obj.rentalPrice.replace("$", ""))
  );
  const minPrice = Math.min(...rentalPrices);
  const maxPrice = Math.max(...rentalPrices);
  let priceOptions = [];
  for (let i = minPrice; i <= maxPrice; i += 10) {
    priceOptions.push(i);
  }
  return priceOptions;
});

export const selectCarData = createSelector(
  [selectCars, selectModalId],
  (cars, id) => {
    return cars.find((car) => car.id === id);
  }
);

export const selectMaxMileage = createSelector([selectCars], (cars) => {
  const maxMileage = Math.max(...cars.map((car) => car.mileage));
  const numberOfDigits = maxMileage.toString().length;
  if (numberOfDigits > 2) {
    const multiplier = Math.pow(10, numberOfDigits - 1);
    return Math.ceil(maxMileage / multiplier) * multiplier;
  }
  return maxMileage;
});

export const selectMaxPrice = createSelector([selectCars], (cars) => {
  const rentalPrices = cars.map((obj) =>
    parseInt(obj.rentalPrice.replace("$", ""))
  );
  return Math.max(...rentalPrices);
});

export const selectBrands = createSelector([selectCars], (cars) => {
  const uniqueMakesSet = new Set(cars.map((car) => car.make));
  return Array.from(uniqueMakesSet);
});

export const selectFilteredCarList = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const mileageFrom = filter?.mileageFrom ? filter.mileageFrom : 0;
    return cars.filter((car) => {
      return (
        car.make.includes(filter?.brand) &&
        parseInt(car.rentalPrice.slice(1)) <= +filter.price &&
        car.mileage >= mileageFrom &&
        car.mileage <= filter.mileageTo
      );
    });
  }
);

export const selectFilteredFavorites = createSelector(
  [selectFavorites, selectFilter],
  (favorites, filter) => {
    const mileageFrom = filter?.mileageFrom ? filter.mileageFrom : 0;
    return favorites.filter((car) => {
      return (
        car.make.includes(filter?.brand) &&
        parseInt(car.rentalPrice.slice(1)) <= +filter.price &&
        car.mileage >= mileageFrom &&
        car.mileage <= filter.mileageTo
      );
    });
  }
);

export const selectPaginatedCarsArray = createSelector(
  [selectCars, selectFilteredCarList, selectFilter, selectPage],
  (cars, filteredCarList, filter, page) => {
    const actualCars = filter ? filteredCarList : cars;
    const itemsPerPage = 8;
    return actualCars.slice(0, page * itemsPerPage);
  }
);

export const selectPaginatedFavorites = createSelector([
  selectFavorites,
  selectFilteredFavorites,
  selectPage,
  selectFilter,
], ((cars, filteredCarList, page, filter)=>{
  const actualCars = filter ? filteredCarList : cars;
  const itemsPerPage = 8;
  return actualCars.slice(0, page * itemsPerPage);
}));
