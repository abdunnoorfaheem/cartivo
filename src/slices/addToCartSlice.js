import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
     

      let allData = state.value.find(
        (item) => item.title === action.payload.title
      );
      if (allData) {
        allData.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.value.find((item) => item.title === action.payload.title);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement:(state,action)=>{
       const item = state.value.find((item) => item.title === action.payload.title);
      if(item.quantity > 1){
         item.quantity -= 1;
      }
    }
  },
});

export const { addtocart, increment,decrement } = addToCartSlice.actions;

export default addToCartSlice.reducer;
