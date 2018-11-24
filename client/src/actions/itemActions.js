// axios lib
import axios from 'axios';

// action types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// getItems -- refactored to do data fetch
export const getItems = () => dispatch => {
  // 1- dispatch the setItemsLoading action
  dispatch(setItemsLoading());
  // 2- make GET request to our express route using axios
  axios.get('api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
// addItem
export const addItem = newItem => dispatch => {
  // 1- make axios POST request
  axios.post('api/items', newItem).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

// deleteItem
export const deleteItem = id => dispatch => {
  // 1- make axios request and pass in the id as a param - then handle the returned promise
  axios.delete(`api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

// itemsLoading
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
