import React, { Component } from 'react';

// react-redux
import { Provider } from 'react-redux';

// redux store
import store from './store';

// local components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

// assets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
