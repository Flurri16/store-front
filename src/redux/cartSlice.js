import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartCount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            // console.log(item)
            const itemInCart = state.items.find(el => el._id === item._id)
            if(itemInCart) {
                itemInCart.quantity += 1
            } else {
                const newItem = {...item, quantity: 1}
                state.items.push(newItem)
            }
        },
        removeFromCart: (state, action) => {
            const item = action.payload
            const itemInCart = state.items.find(el => el._id === item._id)
            if(itemInCart) {
                if(itemInCart.quantity > 1) {
                    itemInCart.quantity -= 1
                } else {
                    state.items = state.items.filter(el => el._id !== item._id)
                }
            }
        }
    }
})
export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions