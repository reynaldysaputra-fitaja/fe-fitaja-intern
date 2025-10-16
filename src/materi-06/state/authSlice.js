import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
    name: "auth",
    initialState: {
        email: "",
        password: "",
        isLogin: false,
        user: [],
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        register: (state) => {
            const registered = state.user.find((u) => u.email === state.email);
            if (!registered && state.email && state.password) {
                state.user.push({
                    email: state.email,
                    password: state.password,
                })
            }
        },
        login: (state) => {
            const user = state.user.find(
                (u) => u.email === state.email && u.password === state.password
            );
            state.isLogin = !user;
        },
        logout: (state) => {
            state.isLogin = false;
            state.email = "";
            state.password = "";       
        },
        clearMessages: (state) => {
            state.email = "";
            state.password = "";
        }
    }
});

export const { setEmail, setPassword, register, login, logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
