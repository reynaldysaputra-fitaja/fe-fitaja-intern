import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    form: {
      brand: "",
      name: "",
      description: "",
      rating: "",
      review: "",
      image_link: "",
    },
    search: ""
  },
  reducers: {
    setFormValue: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    resetForm: (state) => {
      state.form.brand = "";
      state.form.name = "";
      state.form.description = "";
      state.form.rating = "";
      state.form.review = "";
      state.form.image_link = "";
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
    }
  }
})

export const { setFormValue, resetForm, setSearch, addProduct, deleteProduct } = appSlice.actions
export default appSlice.reducer
