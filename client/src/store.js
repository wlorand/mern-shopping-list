// redux packages
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// root reducer
import rootReducer from './reducers/rootReducer';

// initial state
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
