import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {
     
    // state.value.push(action.payload);

    let allData=state.value.find(item=>item.title===action.payload.title);
    if(allData){
        allData.quantity+=1;
    }
    else{
        state.value.push({...action.payload,quantity:1})
    }
    
    },
   
  },
})


export const {addtocart} = addToCartSlice.actions

export default addToCartSlice.reducer