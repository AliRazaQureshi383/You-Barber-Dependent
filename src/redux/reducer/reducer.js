import {LOGIN, LOGOUT} from '../actions/actionType'

const initialState = {
    email: null,
    password: null,
  };
  
  export const mainReducre = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        console.log('first', state.email);
        console.log('second', state.password);
  
        return {email: action.payload.email, password: action.payload.password};
  
        break;
  
      case LOGOUT:
        return {email: null, password: null};
  
        break;
  
      default:
        return state;
        break;
    }
  };
  