const express = require('express');
const User = require('../Schemas/userSchema');
const authRouter = express.Router();
const bcrypt = require('bcryptjs')

authRouter.post('/register',async(req,res,next)=>{
  try{
    const newUserInfo = req.body;
    if(!((await User.find({username:newUserInfo.username})).length>0)){
      const password = newUserInfo.password;
      const newPassword = await bcrypt.hash(password,10);
      newUserInfo.password = newPassword;
      const user = await User.create(newUserInfo);
      res.status(201).json(user);
    }
    else{
      throw new Error('User already exists')
    }
  }
  catch(error){
    console.log(error);
    res.status(409).send(error);
  }
 
});

authRouter.post('/login',async(req,res,next)=>{
  try{
    const userInfo = req.body;
    const user = await User.findOne({$or:[{username:userInfo.username},{email:userInfo.email}]}).populate(['enrolledCourses','createdCourses','contributedCourses']);
    if(!user){
      res.status(404).json({message:"User not found"});
    }
    const password = user.password;
    const match = await bcrypt.compare(userInfo.password, password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    res.status(200).json(user);
  }
  catch(error){
    console.error(error);
  }
})

module.exports = {authRouter};