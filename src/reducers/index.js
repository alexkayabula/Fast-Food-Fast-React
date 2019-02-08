import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  
  users: sampleReducer,
});

export default rootReducer;