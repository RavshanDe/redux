import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";
const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount++;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload.name);
      item.amount--;
    },
  },
});
export default basketSlice.reducer;
export const { increaseAmount, decreaseAmount } = basketSlice.actions;
