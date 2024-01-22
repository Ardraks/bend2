const loginmodel=require("../model/Login")
const app = require('express').Router()


app.post ('/loginview', async (request, response) => {
    const { email, password } = request.body;
    console.log(request.body)
    try {
      const user = await loginmodel.findOne({ email, password });
    
      if (user) {
        response.json({ success: true, message: 'Login successful' });
      }
       else {
        response.json({ success: false, message: 'Invalid Password and email' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during login' });
    }
  });




  module.exports=app
