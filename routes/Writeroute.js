const writemodel=require("../model/Write")
const app = require('express').Router()


app.post ('/writeview', async (request, response) => {
    const {title,write} = request.body;
    try {
    
    const newUser = new writemodel({ title,write});
      await newUser.save();
  
      response.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Internal Server Error' });
    }
});




module.exports=app
