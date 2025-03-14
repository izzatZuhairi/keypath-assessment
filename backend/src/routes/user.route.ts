import { Router } from "express";

import * as userController from "../controllers/user.controller.js";

const router = Router();

router.post("/create", userController.createUser);
router.get("/list", userController.listUser);
router.get("/fetch/:id", userController.fetchUserById);

export default router;
