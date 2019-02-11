import { toast } from 'react-toastify';
import {GET_ERRORS} from '../constants/ActionTypes';


const API_HOST_URL = process.env.API_URL;
const token = window.localStorage.getItem('access_token');
export const makeOrder = (userData, history) => dispatch => {
    return fetch(
        `${API_HOST_URL}/users/orders`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `${token}`
        },
        CORS: 'no-cors',
        body: JSON.stringify({
          name: userData.name,
          item_name: userData.item_name,
          quantity: userData.quantity
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
        }
        
        else {
          history.push('/order');
        }
      });
  };
