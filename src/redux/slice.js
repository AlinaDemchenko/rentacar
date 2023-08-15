import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operation";

const initialState = {
  cars: [],
  favorites: [],
  filter: {
    price: null,
    mileage: { from: null, to: null },
    brand: null,
  },
  root: { isLoading: false, error: null },
};

const handlePending = state => {
    state.root.isLoading = true;
    state.root.error = null;
  };
  
  const handleRejected = (state, { error }) => {
    state.root.isLoading = false;
    state.root.error = error.message;
  };

  const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
      setFilter: (state, action) => {
        state.filter = action.payload;
      },
    },
    extraReducers: builder => {
      builder
        .addCase(getCarsThunk.fulfilled, (state, action) => {
          state.root.isLoading = false;
          state.cars = action.payload;
        })
     .addMatcher((action)=> action.type.endsWith('/pending'), handlePending)
     .addMatcher((action)=> action.type.endsWith('/rejected'), handleRejected)
    },
  });

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
