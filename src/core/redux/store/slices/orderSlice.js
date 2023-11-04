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

        if (response.ok) {
            return true;
        } else {
        throw new Error('Failed to send order');
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
});

export default orderSlice.reducer;
