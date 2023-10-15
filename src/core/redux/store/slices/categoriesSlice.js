import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("http://localhost:3333/categories/all");

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

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesData: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.categoriesData = action.payload;
            state.error = null;
        },
        [getCategories.rejected]: setError,
    }
});

export default categoriesSlice.reducer;
