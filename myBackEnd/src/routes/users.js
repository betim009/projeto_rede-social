const express = require('express');
const { postLogin, getAllUsers, postNewUser, putUserByID, delUserByID } = require('../controllers/users');
const { validateUsers } = require('../middlewares/users');



const router = express.Router();

router.get('/', getAllUsers);
router.post('/', validateUsers, postNewUser);
router.post('/login', postLogin);
router.put('/:id', putUserByID);
router.delete('/:id', delUserByID);

module.exports = router;