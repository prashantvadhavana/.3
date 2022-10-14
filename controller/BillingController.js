const billingmodel=require("../model/BillngSchema")
module.exports={
    billingdeatils:async(req,res)=>{
        const{Address,Contact_No,City,State,PostalCode,Country,TaxId,Deleivery_instruction}=req.body
        await billingmodel.create({Address,Contact_No,City,State,PostalCode,Country,TaxId,Deleivery_instruction})
        res.json({message:"Billing details is added"})
    }
}