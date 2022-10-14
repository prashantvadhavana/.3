const usermodel = require('../model/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
  newperson: async (req, res) => {
    const {
      Firstname,
      Lastname,
      Job_Title,
      Email,
      Password,
      Confirm_password,
    } = req.body;

    await usermodel.create({
      Firstname,
      Lastname,
      Job_Title,
      Email,
      Password,
      Confirm_password,
    });
    res.json({ message: 'person information is added' });
  },
  personlogin: async (req, res) => {
    const { Email, Password } = req.body;
    const checkEmail = await usermodel.findOne({ Email });
    if (checkEmail) {
      // await bcrypt.compare(Password, checkEmail.Password)
      if (Password == checkEmail.Password) {
        const token = jwt.sign({ Email }, 'secretkey');
        res.json({ message: 'user logined', token });
      } else {
        res.json({ message: 'password is wrong' });
      }
    } else {
      res.json({ message: 'email is alreday exist' });
    }
  },
};
