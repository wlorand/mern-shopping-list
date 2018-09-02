/**
 * File: ItemModel.js
 * Desc: Mongoose Model for the Shipping List Items
 */
const mongoose = require('mongoose');
// bring in the mongoose Schema
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = Item = mongoose.model('item', ItemSchema);
