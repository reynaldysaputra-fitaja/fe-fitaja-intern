import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "/src/materi-06/state/store.js"
import App from "./App";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
