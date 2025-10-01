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
    search: "",
    showAddForm: false,
    showPopup: false
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
    },
    openForm: (state, action) => {
      state.showAddForm = true;
      state.mode = action.payload?.mode || 'add';
      state.form = action.payload?.data || {
        brand: "",
        name: "",
        description: "",
        rating: "",
        review: "",
        image_link: ""
      };
    },
    closeForm: (state) => {
      state.showAddForm = false;
      state.form = {};
      state.mode = 'add';
    },
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    }
  }
})

export const { setFormValue, resetForm, setSearch, addProduct, deleteProduct, openForm, closeForm, setShowPopup } = appSlice.actions
export default appSlice.reducer
