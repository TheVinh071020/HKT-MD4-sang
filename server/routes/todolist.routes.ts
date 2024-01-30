import express from "express";
const router = express.Router();
import {
  create,
  deleteTodo,
  findAll,
  update,
} from "../controller/todolist.controller";

router.post("/", create);

router.get("/", findAll);

router.put("/:id", update);

router.delete("/:id", deleteTodo);

export default router;
