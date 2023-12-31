import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async function(product_id = 'all', {rejectWithValue}) {
        try {
            const response = await fetch(`http://localhost:3333/products/${product_id}`);

            if(!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
  };

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsData: [],
        status: null,
        error: null,
        minPrice: '',
        maxPrice: '',
    },
    reducers:{
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.productsData = action.payload;
            state.error = null;
        },
        [getProducts.rejected]: setError,
    }
});

export const { setMinPrice, setMaxPrice } = productsSlice.actions;
export default productsSlice.reducer;
