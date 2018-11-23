// action types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// getItems
export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

// deleteItem
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

// addItem
export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
};
