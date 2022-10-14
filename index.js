
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./confiure/db');
const mainRouter = require('./router/index');
const billingRouter=require("./router/BillingRouter")
app.use('/api', mainRouter);
app.use("/api",billingRouter)
app.listen(4000, () => {
  console.log('server is connected');
});
