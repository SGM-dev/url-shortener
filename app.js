import express from "express";
import connectDB from "./config/db.js";
const app = Express();

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

connectDB();
