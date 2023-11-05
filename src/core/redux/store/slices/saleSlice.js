import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendSale = createAsyncThunk(
    'sale/send', 
    async (orderData, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3333/sale/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
            });

        if (!response.ok) {
            throw new Error('Failed to send sale');
        } 
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};
  
const saleSlice = createSlice({
    name: "sale",
    initialState: {
      saleData: {},
      status: null,
      error: null,
    },
    reducers : {
      resetSaleStatus: (state) => {
        state.status = null;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(sendSale.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(sendSale.fulfilled, (state, action) => {
          state.status = "resolved";
          state.error = null;
        })
        .addCase(sendSale.rejected, setError);
    },
});
export const {resetSaleStatus} = saleSlice.actions;
export default saleSlice.reducer;
