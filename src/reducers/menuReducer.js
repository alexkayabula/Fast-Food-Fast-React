import { GET_MENU, GET_SINGLE_MENU } from '../constants/ActionTypes';
  
  const initialState = {
    menu: [],
    errors: {},
    
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENU:
        return {
          ...state,
          menu: action.payload,
        };
      case GET_SINGLE_MENU:
        return {
          ...state,
          menu: action.payload
        };
      default:
        return state;
    }
  };
  export default menuReducer;
  