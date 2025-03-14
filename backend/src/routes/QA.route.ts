import { Router } from "express";

import * as QAController from "../controllers/QA.controller.js";

const router = Router();

router.get("/fetch", QAController.fetchQuestions);

export default router;
