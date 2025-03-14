import { Router } from "express";

import * as charController from "../controllers/char.controller.js";

const router = Router();

router.get("/result", charController.fetchCharByProps);

export default router;
