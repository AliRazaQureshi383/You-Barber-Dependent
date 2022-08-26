
import {LOGIN, LOGOUT} from './actionType'

export const login = data => ({
    type: LOGIN,
    payload: data,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  