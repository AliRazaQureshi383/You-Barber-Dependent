import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: null,
  password: null,
  role: null,
  token: null,
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      console.log('action', action);
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
      console.log('state.email', state.email);
    },

    logout(state) {
      state.email = null;
      state.password = null;
    },

    token(state, action) {
      console.log('action', action);
      state.token = action.payload.token;
    },
  },
});

export const {login, logout, token} = loginReducer.actions;
export default loginReducer.reducer;
