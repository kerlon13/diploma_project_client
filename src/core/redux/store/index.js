import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import categoryReducer from "./slices/singleCategorySlice";
import sortingReducer from "./slices/sortingSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        category: categoryReducer,
        sorting: sortingReducer,
        cart: cartReducer,
        order: orderReducer,
    }
});

