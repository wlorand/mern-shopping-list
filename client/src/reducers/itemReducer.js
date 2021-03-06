// util lib for assigning ids
//import uuid from 'uuid';

// action types
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  items: [],
  loading: false
  // items: [
  //   { id: uuid(), name: 'New Weggs' },
  //   { id: uuid(), name: 'New Milktoast' },
  //   { id: uuid(), name: 'New Tofurky' },
  //   { id: uuid(), name: 'More Aqua Fresca' }
  // ]
};

const itemReducer = (state = initialState, action) => {
  // use a switch to test the diff action.type
  switch (action.type) {
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ITEMS:
      // data fetch here -- return a spread of state, so you can easily add onto it
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        // need to spread the new item into the state items here
        // (action.payload listed first to list the new item first)
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload) // return all items except the one that matches the id
      };

    default:
      return state;
  }
};

export default itemReducer;
