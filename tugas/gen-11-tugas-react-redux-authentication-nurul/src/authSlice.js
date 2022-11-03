import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    token: '',
    isLogin: false
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        handleAfterLogin (state, action) {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            localStorage.setItem("userData", JSON.stringify(action.payload.userData));
            localStorage.setItem("token", action.payload.token);

            state.isLogin = action.payload.token ? action.payload.token : null;
        },
        
        logout (state, action) {
            state.userData({})
            state.token(null)
            localStorage.removeItem("userData")
            localStorage.removeItem("token")
        }
    }
})

export const {handleAfterLogin, logout} = authSlice.actions;
export default authSlice.reducer

