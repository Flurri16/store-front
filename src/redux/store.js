import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'
import cartSlice from './cartSlice.js'
import itemsSlice from './itemsSlice.js'
export const store = configureStore({
    reducer: {
        auth: authSlice,
        items: itemsSlice,
        cart: cartSlice,
    }
})