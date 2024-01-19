import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.get("/", async (req, res) => {
  try {
    const result = await userService.searchAll();
    res.json(result);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const result = await userService.search({ id: req.params.id });
    res.json(result);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});
router.post("/", createUserValid, async (req, res) => {
  try {
    const result = await userService.addUser(req.body);
    res.json(result).status(201);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});
router.put("/:id", updateUserValid, async (req, res) => {
  try {
    const result = await userService.updateUser(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const result = await userService.removeUser({ id: req.params.id });
    res.json(result);
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

export { router };
