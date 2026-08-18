import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "get all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ message: "get a user details" });
});

userRouter.post("/", (req, res) => {
  res.send({ message: "create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ message: "update a user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ message: "delete a user" });
});

export default userRouter;
