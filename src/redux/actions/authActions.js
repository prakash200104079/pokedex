import { LOGIN, LOGOUT, SIGNUP, LOGIN_FAILURE } from '../actionTypes';

export const signup = (email, password) => ({
  type: SIGNUP,
  payload: { email, password },
});

export const login = (email, password) => (dispatch, getState) => {
  const { auth: { users } } = getState();
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    dispatch({ type: LOGIN, payload: { email } });
    return true; // Login successful
  } else {
    dispatch({ type: LOGIN_FAILURE, payload: 'Invalid email or password' });
    return false; // Login failed
  }
};

export const logout = () => ({
  type: LOGOUT,
});
