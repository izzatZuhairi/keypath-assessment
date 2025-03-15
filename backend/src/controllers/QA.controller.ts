import { Request, Response } from "express";

import { TYPE } from "../types/types.js";

import { failResponse, successResponse } from "src/commons/response.js";
import * as QASvc from "../services/QA.service.js";

export const fetchQuestions = async (req: Request, res: Response) => {
  let response = null;

  try {
    const { type, level, ...cond } = req.query;

    const data = await QASvc.fetchQuestions(
      type as unknown as TYPE,
      Number(level),
      cond ? JSON.stringify(cond) : null,
    );
    response = successResponse({
      data,
      message: "success",
    });
  } catch (e) {
    console.log(e);

    response = failResponse({
      data: null,
      code: 500,
      message: `Internal Server Error`,
    });
  }

  res.send(response);
};
