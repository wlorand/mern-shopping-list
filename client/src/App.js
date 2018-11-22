// libs
import React, { Component } from 'react';

// local components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

// assets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
