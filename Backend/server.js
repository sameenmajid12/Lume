 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
const dotenv = require("dotenv")
const Course = require('./Schemas/courseSchema.js')
// Import Routers
const {authRouter} = require("./Routers/authRouter.js");
const {userRouter} = require("./Routers/userRouter.js");
const {courseRouter} = require("./Routers/courseRouter.js");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/courses", courseRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
app.listen(3002, () => console.log(`Server running on port 3002`));