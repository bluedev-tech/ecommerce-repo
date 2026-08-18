import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("welcome to the user auth API");
});

app.listen(PORT, async () => {
  console.log(`user auth api running on http://localhost:${PORT}`);
  await connectToDatabase();
  console.log(`databse runnning in ${NODE_ENV} mode`);
});

export default app;
