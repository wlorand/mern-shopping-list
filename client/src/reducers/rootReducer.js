// redux libs
import { combineReducers } from 'redux';

// local reducers
import itemReducer from './itemReducer';

// export the combined reducers object
export default combineReducers({
  item: itemReducer
});
