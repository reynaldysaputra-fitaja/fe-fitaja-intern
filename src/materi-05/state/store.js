import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice"
import uiReducer from "./uiSlice"
import { api } from '../service/api';

export const store = configureStore({
  reducer: {
    app: appReducer,
    ui: uiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
