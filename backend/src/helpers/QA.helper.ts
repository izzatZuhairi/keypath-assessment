import { TYPE } from "src/types/types.js";
import { Answer, AnswerDocument } from "../models/answer.model.js";
import { Question, QuestionDocument } from "../models/question.model.js";

// questions

export const createBulkQuestions = async (
  input: Partial<QuestionDocument[]>,
) => {
  return Question.insertMany(input);
};

export const listQuestions = async () => {
  return Question.find().lean();
};

export const getInitialQuestion = async () => {
  // for the sake of simplicity, the first question is set to level: 0
  return Question.findOne({ level: 0 }).lean();
};

export const findQuestionsByCond = async (condition: {}) => {
  return Question.findOne({ condition }).lean();
};

export const findQuestions = async (type: TYPE, level: number | null) => {
  const filter = { type };

  if (level !== null) filter["level"] = level;

  return Question.find(filter).lean();
};

// answers

export const createBulkAnswer = async (input: Partial<AnswerDocument[]>) => {
  return Answer.insertMany(input);
};

export const listAnswers = async () => {
  return Answer.find().lean();
};

export const findAnswer = async (type: TYPE) => {
  return Answer.find({ type }).lean();
};

export const filterByCondition = (
  arr: QuestionDocument[] | AnswerDocument[],
  cond: {},
  isMatch: boolean,
) => {
  return arr.filter((item) =>
    Object.entries(cond).every(([key, val]) =>
      item?.condition?.[key]
        ? item.condition[key].includes(Number(val))
        : isMatch,
    ),
  );
};
