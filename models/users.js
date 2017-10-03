/**
 * Created by marcos on 25/09/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Users = mongoose.model('User', usersSchema);

module.exports = Users;
