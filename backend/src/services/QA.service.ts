import { TYPE } from "../types/types.js";

import * as QAHelper from "../helpers/QA.helper.js";

export const fetchQuestions = async (
  type: TYPE,
  level: number,
  condition = null,
) => {
  const data = {
    question: {},
    answers: [],
  };

  if (type === TYPE.role && level === 0) {
    const [q, a] = await Promise.all([
      QAHelper.getInitialQuestion(),
      QAHelper.findAnswer(type),
    ]);

    data.question = q;
    data.answers = a;
  } else {
    const [q, a] = await Promise.all([
      QAHelper.findQuestions(type, level),
      QAHelper.findAnswer(type),
    ]);

    const condObj = JSON.parse(condition);

    data.question = QAHelper.filterByCondition(q, condObj, true)[0];
    data.answers = QAHelper.filterByCondition(a, condObj, false);
  }

  return data;
};
