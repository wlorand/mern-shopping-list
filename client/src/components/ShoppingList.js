/**
 * File: ShoppingList.js
 * Desc: Render a Shopping List of Items with Remove Item Links, Add Item Modal
 */

// 0.0 - import React Libs
import React, { Component } from 'react';
// 0.1 - import react-transition-group
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// 0.2 - temp import of uuid to give our items temp ids
import uuid from 'uuid';

// 0.1 import UI Components  (doing this means less CSS inline)
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

// 1.0 define your Shopping List component
class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Tofu' },
        { id: uuid(), name: 'Water' }
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name: name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
// test debugger for this app
// debugger;

export default ShoppingList;
