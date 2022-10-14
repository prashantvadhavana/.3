const mongoose=require("mongoose")
const billingmodel=new mongoose.Schema({
    Address:String,
    Contact_No:Number,
    City:String,
    State:String,
    PostalCode:Number,
    Country:String,
    TaxId:Number,
   Deleivery_instruction:String,
   
})
module.exports=new mongoose.model("BillingDetails",billingmodel)