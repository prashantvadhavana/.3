const express = require('express');
const usermodel = require('../model/userSchema');
const userController = require('../controller/userController');
const { personvalidate, verifytoken } = require('../middleware/user');
const userRouter = express();
userRouter.get('/add', personvalidate, userController.newperson2);
userRouter.post('/add', personvalidate, userController.newperson);
userRouter.post('/login', userController.personlogin);
module.exports = userRouter;
