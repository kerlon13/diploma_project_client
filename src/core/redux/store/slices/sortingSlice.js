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
