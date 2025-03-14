import { Router } from "express";

import { insertPartialData, reset } from "../data/seeder-function.js";
import { login } from "../controllers/user.controller.js";

const router = Router();

router.get("/health/check", (_req, res) => {
  res.send("Everything works fine!");
});

router.get("/init-partial-data", async (_req, res) => {
  const data = await insertPartialData();
  res.send(data);
});

router.get("/reset-data", async (_req, res) => {
  await reset();
  res.send("reset done");
});

router.post("/login", login);

export default router;
