import { GET_ERRORS, SIGNOUT, LOGIN_SUCCESS} from '../constants/ActionTypes';
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


export const loginUser = (userData, history) => dispatch => {
  return fetch(
    'https://fast-food-fast-deploy.herokuapp.com/api/v2/auth/login',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      CORS: 'no-cors',
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    }
  )
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.errors
        });
      } else {

        if ('token' in data) {
          localStorage.setItem('access_token', data.token);
          localStorage.setItem('username', userData.username);
          dispatch({ type: LOGIN_SUCCESS });
          history.push('/');
          return true;
        } else 
        {
          toast.warning(data.message);
        }
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