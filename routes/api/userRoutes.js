const router = require('express').Router();
const {
    getUsers,
    GetSingleUser,
    createUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(GetSingleUser).delete(deleteUser);

module.exports = router;