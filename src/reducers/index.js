import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import { currentUser } from '../reducers/authReducer';
import menuReducer from '../reducers/menuReducer';
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: sampleReducer,
  errors: errorReducer,
  menu: menuReducer,
  currentUser
});

export default rootReducer;
