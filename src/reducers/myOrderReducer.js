import { GET_MY_ORDERS } from '../constants/ActionTypes';
  
  const initialState = {
    myorders: [],
    errors: {},
    
  };
  
  const myOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MY_ORDERS:
        return {
          ...state,
          myorders: action.payload,
        };
      default:
        return state;
    }
  };
  export default myOrderReducer;
  