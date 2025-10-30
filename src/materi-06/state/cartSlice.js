import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find(
                (item) => item.id === newItem.id && item.size === newItem.size
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { id, size } = action.payload;
            const confirmDelete = window.confirm( 
            `Do you want to remove from the cart?`
            );
            if(confirmDelete) {state.items = state.items.filter(
                (item) => !(item.id === id && item.size === size)
            );}
        },
        updateQuantity: (state, action) => {
            const { id, size, quantity } = action.payload;
            const existing = state.items.find(
                (item) => item.id === id && item.size === size
            );
            if (existing && quantity > 0) existing.quantity = quantity;
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;