const express = require('express');
const userRouter = require('./userRouter');
const billingRouter=require("./BillingRouter")
const mainRouter = express();
mainRouter.use('/user', userRouter);
mainRouter.use("/user",billingRouter)
module.exports = mainRouter;
