import { createSlice } from "@reduxjs/toolkit";

const savedProductSlice = createSlice ({
    name: "savedProduct",
    initialState: {
        itemSaved: [],
    },
    reducers: {
        addToSave: (state, action) => {
            state.itemSaved = [...state.itemSaved, action.payload];
        },
        removeFromSave: (state, action) => {
            state.itemSaved = state.itemSaved.filter(
                (itemSaved) => itemSaved?.id !== action.payload.id
            );
        },
    }
})

export const { addToSave, removeFromSave } = savedProductSlice.actions;
export default savedProductSlice.reducer;
