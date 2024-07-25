import { SIGNUP, LOGIN, LOGOUT, LOGIN_FAILURE } from '../actionTypes';

const initialState = {
  email: null,
  isLoggedIn: false,
  users: [],
  loginError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        loginError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        email: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
