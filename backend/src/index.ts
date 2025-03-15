import "dotenv/config";

import express from "express";
import cors from "cors";

import commonRoutes from "./routes/common.route.js";
import userRoutes from "./routes/user.route.js";
import charRoutes from "./routes/char.route.js";
import QARoutes from "./routes/QA.route.js";

import { conn } from "./db/connection.js";

const main = async () => {
  const app = express();
  const port = Number(process.env.PORT);

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
      methods: "GET, POST, PUT, DELETE, OPTIONS",
      credentials: false,
    }),
  );

  app.use("/", commonRoutes);
  app.use("/user", userRoutes);
  app.use("/char", charRoutes);
  app.use("/question", QARoutes);

  try {
    conn().then(() =>
      app.listen(port, () => {
        return console.log(`Express is listening at localhost ${port}`);
      }),
    );
  } catch (e) {
    console.log("Something went wrong: " + e);
    process.exit(1);
  }
};

main();
