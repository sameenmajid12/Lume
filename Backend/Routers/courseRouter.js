const express = require('express');
const User = require('../Schemas/userSchema');
const Course = require('../Schemas/courseSchema');
const courseRouter = express.Router();
const bcrypt = require('bcryptjs')

courseRouter.get('/:courseId',async(req,res,next)=>{
  try{
    const {courseId} = req.params;
    console.log(courseId);
    const course = await Course.findById(courseId);
    if(!course){
      res.status(404).json({message:"Course not found"});
    }
    res.status(200).json(course);
  }
  catch(error){
   console.error(error);
   res.status(500).json({message:"Internal error, try again!"})
  }
 
})


courseRouter.get("/courses", async (req, res) => {
  const { category, subcategory } = req.query;
  try {
    const courses = await Course.find({ category, subcategory });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

module.exports = {courseRouter};