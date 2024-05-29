import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userroutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userroutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
// app.get("/",(req, res)=>{
// 	res.send("hello")

// })

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
