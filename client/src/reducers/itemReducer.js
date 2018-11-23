// util lib for assigning ids
import uuid from 'uuid';

// action types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggie Weggs' },
    { id: uuid(), name: 'Milktoast' },
    { id: uuid(), name: 'Tofurky' },
    { id: uuid(), name: 'Aqua Fresca' }
  ]
};

const itemReducer = (state = initialState, action) => {
  // use a switch to test the diff action.type
  switch (action.type) {
    case GET_ITEMS:
      // data fetch here
      return {
        ...state
      };
    default:
      return state;
  }
};

export default itemReducer;
