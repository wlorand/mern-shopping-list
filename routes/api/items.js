/**
 * File: items.js
 * Desc: Define server-side routes for the shopping list
 *
 */

// 1a- require express
const express = require('express');

// 1b- bring in the Express router
const router = express.Router();

// 1c - bring in our Item Mongoose Model
const ItemModel = require('../../models/ItemModel');

// 2- Write Some Routes

// @route: GET api/items
// @desc: Get All Items
// @access: Public
router.get('/', (req, res) => {
  ItemModel.find() // mongoose method, no?
    .sort({ date: -1 })
    .then(items => res.json(items));
  //.catch(err => console.log(err));
});

// @route: POST api/items/
// @ desc: Add a new shopping list item
// @access: Public  (//TODO: make this private after adding auth)
router.post('/', (req, res) => {
  const newItem = new ItemModel({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item)); // .save() as another mongoose method
});

// @route: DELETE api/items/
// @ desc: Remove a shopping list item -- notice the :id param
// @access: Public
router.delete('/:id', (req, res) => {
  ItemModel.findById(req.params.id) // .findById() anoter key mongoose method
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => r({ success: false }));
});

// 99 - export the router
module.exports = router;
