import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Combine all individual reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
