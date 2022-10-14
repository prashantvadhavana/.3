const express=require("express")
const billingmodel=require("../model/BillngSchema")
const billingController=require("../controller/BillingController")
const {Addressvalidate}=require('../middleware/Address')
const billingRouter=express()
billingRouter.post("/added",Addressvalidate,billingController.billingdeatils)
module.exports=billingRouter