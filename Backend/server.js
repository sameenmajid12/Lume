import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import Routers
import {authRoutes} from "./routes/auth.js";
import {userRoutes} from "./routes/users.js";
import {courseRoutes} from "./routes/courses.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/courses", courseRouter);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
app.listen(3002, () => console.log(`Server running on port 3002`));