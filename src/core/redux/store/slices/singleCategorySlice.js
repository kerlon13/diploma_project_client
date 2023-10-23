import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategoryProducts = createAsyncThunk(
    'category/getCategoryProducts',
    async function( id , {rejectWithValue}) {
        try {
            const response = await fetch(`http://localhost:3333/categories/${id}`);

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

const singleCategorySlice = createSlice({
    name: "category",
    initialState: {
        singleCategoryData: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getCategoryProducts.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.singleCategoryData = action.payload;
            state.error = null;
        },
        [getCategoryProducts.rejected]: setError,
    }
});

export default singleCategorySlice.reducer;
