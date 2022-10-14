const usermodel = require('../confiure/db');
const userController = require('../controller/userController');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
module.exports = {
  personvalidate: async (req, res, next) => {
    const Schema = Joi.object({
      Firstname: Joi.string().required(),
      Lastname: Joi.string().required(),
      Job_Title: Joi.string().required(),
      Email: Joi.string().required(),
      Password: Joi.string().required(),
      Confirm_password: Joi.string().required(),
      id: Joi.optional(),
    });
    const result = Schema.validate(req.body);
    if (result.error) {
      res.json({ message: result.error.details[0].message });
    } else {
      next();
    }
  },
  verifytoken: async (req, res) => {
    const beareHeader = req.headers['authorization'];
    if (typeof beareHeader !== 'undefined') {
      try {
        const data = jwt.verify(beareHeader, 'secretkey');
        const result = await usermodel.findOne({ Email: data.Email });
        if (result) {
          next();
        } else {
          res.json({ message: 'email is not valid' });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      res.json({ message: 'mentioned valid token' });
    }
  },
};
