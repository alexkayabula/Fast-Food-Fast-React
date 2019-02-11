import { toast } from 'react-toastify';
import {GET_ERRORS, GET_MY_ORDERS} from '../constants/ActionTypes';


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



  export const getMyOrders = (url = undefined) => dispatch => {
  
      let path = url;
      if (!path) {
        path = `${API_HOST_URL}/v2/users/orders`;
      }
      return fetch(path, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `${token}`
        }
      })
        .then(res => res.json())
        .then(myorders => {
          dispatch({
            type: GET_MY_ORDERS,
            payload: myorders
          });
        });
    };
    