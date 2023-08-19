import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operation";

const initialState = {
  cars: [],
  favorites: [],
  filter: null,
  modalId: null,
  root: { isLoading: false, error: null },
  page: 1,
  isAccordionExpanded: {
    accessories: false,
    functionalities: false,
    conditions: false,
  },
};

const handlePending = (state) => {
  state.root.isLoading = true;
  state.root.error = null;
};

const handleRejected = (state, { error }) => {
  state.root.isLoading = false;
  state.root.error = error.message;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setConditionsExpanded: (state) => {
      state.isAccordionExpanded.conditions =
        !state.isAccordionExpanded.conditions;
    },
    setAccessoriesExpanded: (state) => {
      state.isAccordionExpanded.accessories =
        !state.isAccordionExpanded.accessories;
    },
    setFunctionalitiesExpanded: (state) => {
      state.isAccordionExpanded.functionalities =
        !state.isAccordionExpanded.functionalities;
    },
    setPage: (state, action) => {
      state.page = action.payload ? action.payload : state.page + 1;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setModalId: (state, action) => {
      state.modalId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.root.isLoading = false;
        state.cars = action.payload;
      })
      // .addCase(getCarThunk.fulfilled, (state, action) => {
      //   state.root.isLoading = false;
      //   state.modal.carData = action.payload;
      // })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const {
  setFilter,
  setModalId,
  setPage,
  setAccessoriesExpanded,
  setFunctionalitiesExpanded,
  setConditionsExpanded,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
