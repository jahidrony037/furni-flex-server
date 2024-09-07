const express = require('express');
const { createUser, getUsers } = require('../controller/user.controller');
const router = express.Router();

router.post('/createUser',createUser);
router.get('/users',getUsers);

module.exports=router;

