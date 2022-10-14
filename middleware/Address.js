const billingmodel=require("../model/BillngSchema")
const billingController=require("../controller/BillingController")
const Joi=require("joi")
module.exports={
    Addressvalidate:async(req,res,next)=>{
        const Schema=Joi.object({
            Address:Joi.string().required(),
          Contact_No:Joi.number().optional(),
          City:Joi.string().required(),
          State:Joi.string().required(),
          PostalCode:Joi.number().required(),
          Country:Joi.string().required(),
          TaxId:Joi.number().required(),
        Deleivery_instruction:Joi.string().optional(),
        })
        const result=Schema.validate(req.body)
        if(result.error){
            res.json({message:result.error.details[0].message})
        }else{
            next()
        }
    }
}