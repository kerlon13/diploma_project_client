import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    }
})

