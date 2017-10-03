var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 1,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
var Restaurants = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurants;