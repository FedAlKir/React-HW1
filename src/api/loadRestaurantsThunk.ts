import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadRestaurants } from "./loadRestaurants";

export const loadRestaurantsThunk = createAsyncThunk("get/retsaurants", loadRestaurants);