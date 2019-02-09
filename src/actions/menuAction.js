import { GET_MENU } from '../constants/ActionTypes';


const API_HOST_URL = process.env.API_URL;
const token = window.localStorage.getItem('access_token');
export const getMenu = (url = undefined) => dispatch => {

    let path = url;
    if (!path) {
      path = `${API_HOST_URL}/menu`;
    }
    return fetch(path, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `${token}`
      }
    })
      .then(res => res.json())
      .then(menu => {
        dispatch({
          type: GET_MENU,
          payload: menu
        });
      });
  };