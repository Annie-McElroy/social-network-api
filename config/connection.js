const { connect, connection } = require('mongoose');

connect('mongodb+srv://Yuechan8522:AlexMac12@cluster0.kmtupzk.mongodb.net/socialNetworkDB');

module.exports = connection;