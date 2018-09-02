/**
 * File: items.js
 * Desc: Define routes for the shopping list
 * 
 */

 // 1a- require express
const express = require('express');

// 1b- bring in the router 
const router = express.Router();

// 1c - bring in our Item Model
const ItemModel = require('../../models/ItemModel');

// 2- Write Some Routes

// @route: GET api/items
// @desc: Get All Items
// @access: Public 	
router.get('/', (req,res) => {
    ItemModel.find()
        .sort({date: -1})
        .then(items => res.json(items));
        //.catch(err => console.log(err));
});

// @route: POST api/items/
// @ desc: Add a new shopping list item 
// @access: Public  (//TODO: make this private after adding auth)
router.post('/', (req,res) => {
    const newItem = new ItemModel({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item));
});


// @route: DELETE api/items/
// @ desc: Remove a shopping list item 
// @access: Public  
router.delete('/:id', (req,res) => {
    ItemModel.findById(req.params.id)
        .then(item => item.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success:false})) 
    })
    

// 99 - export the router
module.exports = router;
