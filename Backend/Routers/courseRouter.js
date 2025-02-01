const express = require('express');
const User = require('../Schemas/userSchema');
const Course = require('../Schemas/courseSchema');
const courseRouter = express.Router();
const bcrypt = require('bcryptjs')

courseRouter.get('/:courseId',async(req,res,next)=>{
  try{
    
  }
  catch(error){
   
  }
 
})

module.exports = {courseRouter};