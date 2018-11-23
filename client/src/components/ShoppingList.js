/**
 * File: ShoppingList.js
 * Desc: Render a Shopping List of Items with Remove Item Links, Add Item Modal
 */

// react Libs
import React, { Component } from 'react';

// react-redux libs
import { connect } from 'react-redux';

// redux actions
import { getItems, deleteItem } from '../actions/itemActions';

// prop types
import PropTypes from 'prop-types';

// util lib: give our items temp ids -- only applies to component state data
import uuid from 'uuid';

// import UI Components
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

// css effects
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// 1.0 define your Shopping List component
class ShoppingList extends Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Old Eggs' },
  //     { id: uuid(), name: 'Old Toast' },
  //     { id: uuid(), name: 'Old Turkey' },
  //     { id: uuid(), name: 'Old Water' }
  //   ]
  // };

  componentDidMount() {
    console.log('mounted!');
    // call the action
    this.props.getItems();
  }

  render() {
    const { items } = this.props.itemObj;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...items, { id: uuid(), name: name }]
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
                      this.setState(prevState => ({
                        items: prevState.items.filter(item => item.id !== id)
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemObj: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemObj: state.item // access here as props.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(ShoppingList);
