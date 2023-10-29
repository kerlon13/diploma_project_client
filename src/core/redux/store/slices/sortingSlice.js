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

// Сортировка по увеличению цены
export const sortPriceAsc = (data) => {
    return data.slice().sort((a, b) => a.price - b.price);
  };
  
  // Сортировка по убыванию цены
  export const sortPriceDesc = (data) => {
    return data.slice().sort((a, b) => b.price - a.price);
  };
  
  // Сортировка по названию (A to Z)
  export const sortTitleAsc = (data) => {
    return data.slice().sort((a, b) => a.title.localeCompare(b.title));
  };
  
  // Сортировка по названию (Z to A)
  export const sortTitleDesc = (data) => {
    return data.slice().sort((a, b) => b.title.localeCompare(a.title));
  };