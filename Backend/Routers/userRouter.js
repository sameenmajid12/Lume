const express = require('express');
const User = require('../Schemas/userSchema');
const userRouter = express.Router();
const bcrypt = require('bcryptjs')

userRouter.get('/:userId',async(req,res,next)=>{
  try{
   
  }
  catch(error){

  }
 
})

module.exports = {userRouter};