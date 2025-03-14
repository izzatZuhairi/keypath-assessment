/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { Question } from "../models/question.model.js";
import { Answer } from "../models/answer.model.js";
import { Char } from "../models/character.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const questionPath = path.resolve(__dirname, "question.json");
const answerPath = path.resolve(__dirname, "answers.json");
const characterPath = path.resolve(__dirname, "character-data.json");

export const insertPartialData = async () => {
  const q = (await readParse(questionPath)) as any;
  const a = (await readParse(answerPath)) as any;
  const c = (await readParse(characterPath)) as any;

  const all_q = [
    ...q.question_initial,
    ...q.question_dps,
    ...q.question_tank,
    ...q.question_support,
  ];

  const all_a = [
    ...a.answer_initial,
    ...a.answer_dps_1,
    ...a.answer_dps_2,
    ...a.answer_dps_melee_movement,
    ...a.answer_dps_3_hitscan,
    ...a.answer_dps_3_projectile,
    ...a.answer_difficulty_dps,
    ...a.answer_ultimate_dps,
    ...a.answer_tank_1,
    ...a.answer_tank_2,
    ...a.answer_tank_movement,
    ...a.answer_tank_shield,
    ...a.answer_tank_skill,
    ...a.answer_tank_ultimate,
    ...a.answer_support_1,
    ...a.answer_support_mobility,
    ...a.answer_support_playstyle,
    ...a.support_aimstyle,
    ...a.support_skill,
    ...a.support_ultimate,
  ];

  const all_c = c.characters;

  await Promise.all([
    Question.insertMany(all_q),
    Answer.insertMany(all_a),
    Char.insertMany(all_c),
  ]);

  return "okay";
};

export const reset = async () => {
  await Promise.all([
    Question.deleteMany(),
    Answer.deleteMany(),
    Char.deleteMany(),
  ]);
};

const readParse = async (path: string) => {
  const rawData = await fs.readFile(path, "utf8");
  return JSON.parse(rawData);
};
