import { Router } from "express";

import * as userController from "../controllers/user.controller.js";

const router = Router();

router.post("/create", userController.createUser);
router.get("/list", userController.listUser);
router.get("/fetch/:id", userController.fetchUserById);
router.post("/record/add", userController.addRecord);
router.get("/stats", userController.getStats);

export default router;
