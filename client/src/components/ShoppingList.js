/**
 * File: ShoppingList.js
 * Desc: Render a Shopping List of Items with Remove Item Links, Add Item Modal
 */

// react, redux Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

// redux actions
import { getItems, deleteItem } from '../actions/itemActions';

// prop types
import PropTypes from 'prop-types';

// util lib: give our items temp ids -- only applies to component state data
// not needed after connecting to backend as mongodb gives things an _id
// import uuid from 'uuid';

// local components
import ItemModal from './ItemModal';

// UI Components
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

// css effects
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// 1.0 define your Shopping List component
class ShoppingList extends Component {
  // state = {  // old local component state -- replaced by redux version
  //            1st as static data in the reducer, then dynamic data from the mongo DB
  //   items: [
  //     { id: uuid(), name: 'Old Eggs' },
  //     { id: uuid(), name: 'Old Toast' },
  //     { id: uuid(), name: 'Old Turkey' },
  //     { id: uuid(), name: 'Old Water' }
  //   ]
  // };

  componentDidMount() {
    // call the action for get items
    // -- know does an axios.get to an express api that fetches items from an mlab-hosted mongo DB
    this.props.getItems();
  }

  render() {
    const { items } = this.props.itemObj;

    return (
      <Container>
        {/* <Button  -- old pre modal js .prompt version of add item
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
        </Button> */}
        <ItemModal />
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={400} classNames="fade">
                <ListGroupItem>
                  {name}
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.props.deleteItem(_id)}
                    // onClick={() => {
                    //   this.setState(prevState => ({
                    //     items: prevState.items.filter(item => item.id !== id)
                    //   }));
                    // }}
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
  deleteItem: PropTypes.func.isRequired,
  itemObj: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemObj: state.item // access here as props.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
