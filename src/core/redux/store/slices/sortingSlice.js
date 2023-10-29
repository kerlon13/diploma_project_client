import { createSlice } from '@reduxjs/toolkit';

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: 'default', 
  reducers: {
    setSortingMethod: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSortingMethod } = sortingSlice.actions;
export default sortingSlice.reducer;

export const sortPriceAsc = (data) => {
    return data.slice().sort((a, b) => a.price - b.price);
  };
  
  export const sortPriceDesc = (data) => {
    return data.slice().sort((a, b) => b.price - a.price);
  };
  
  export const sortTitleAsc = (data) => {
    return data.slice().sort((a, b) => a.title.localeCompare(b.title));
  };
  
  export const sortTitleDesc = (data) => {
    return data.slice().sort((a, b) => b.title.localeCompare(a.title));
  };