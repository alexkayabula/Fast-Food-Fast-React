const initialState = {
    isAuthenticated: false,
    userData: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export function currentUser(){
    return {
      username: localStorage.getItem('username'),
    };
  }
  