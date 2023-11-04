import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk(
    'order/send', 
    async (orderData, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3333/order/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
            });

        if (!response.ok) {
            throw new Error('Failed to send order');
        } 
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};
  
const orderSlice = createSlice({
    name: "order",
    initialState: {
      orderData: {},
      status: null,
      error: null,
    },
    reducers : {
      resetOrderStatus: (state) => {
        state.status = null;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(sendOrder.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(sendOrder.fulfilled, (state, action) => {
          state.status = "resolved";
          state.error = null;
        })
        .addCase(sendOrder.rejected, setError);
    },
});
export const {resetOrderStatus} = orderSlice.actions;
export default orderSlice.reducer;
