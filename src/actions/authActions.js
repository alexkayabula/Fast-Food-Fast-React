import { GET_ERRORS, SIGNOUT} from '../constants/ActionTypes';
import { toast } from 'react-toastify';

const API_HOST_URL = process.env.API_URL;

export const registerUser = (userData, history) => dispatch => {
  return fetch(`${API_HOST_URL}/auth/signup`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify({
        name: userData.name,
        username: userData.username,
        password: userData.password
      })
    }
  )
    .then(res => res.json())
    .then(data => {
      toast.warning(data.message);
      if (data.errors) {
        dispatch({
          type: GET_ERRORS,
          payload: data,
          
        });
      } else if(data.message === "You registered successfully. Please login."){
        history.push('/login');
      }
    });
};


export function logoutUser() {
  return function(dispatch) {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    dispatch({ type: SIGNOUT });
  };
}