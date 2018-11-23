// react libs
import React, { Component } from 'react';

// react-redux libs
import { connect } from 'react-redux';

// redux actions
import { addItem } from '../actions/itemActions';

// prop types
import PropTypes from 'prop-types';

// uuid util lib
import uuid from 'uuid';

// react-strap UI components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class ItemModal extends Component {
  // ok to have some local component state - even if a container component linked to redux
  state = {
    modalOpen: false,
    itemName: ''
  };

  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log('itemName now is: ', this.state.itemName);
    const newItem = {
      id: uuid(),
      name: this.state.itemName
    };
    // call the addItem action with newItem as the payload
    this.props.addItem(newItem);
    // close the modal
    this.toggle();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="itemName">Item</Label>
                <Input
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="Add shopping item"
                  onChange={this.handleChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
  itemObj: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemObj: state.item // access in the component as props.itemObj
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
