const userModel = require('../models/userModel');

const userController = {
    findAllUsers: (req, res) => {
        userModel.findAll().then((users) => res.json(users))
        .catch(err => res.status(500).json(err));
    }
}

module.exports = userController;