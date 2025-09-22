import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showAddForm: false
  },
  reducers: {
    openForm: (state) => {
      state.showAddForm = true
    },
    closeForm: (state) => {
      state.showAddForm = false
    }
  }
})

export const { openForm, closeForm } = uiSlice.actions
export default uiSlice.reducer
