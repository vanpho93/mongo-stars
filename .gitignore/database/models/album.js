// Todo: create Album Schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    image: String,
    numberTracks: Number,
    revenue: Number
});

module.exports = AlbumSchema;
