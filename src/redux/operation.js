import { createAsyncThunk } from "@reduxjs/toolkit";
import {  fetchCars } from "../services/api";

export const getCarsThunk = createAsyncThunk("cars/fetchAll", () => fetchCars());

