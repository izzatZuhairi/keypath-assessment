import { Request, Response } from "express";
import { failResponse, successResponse } from "../commons/response.js";

import * as charSvc from "../services/char.service.js";

export const fetchCharByProps = async (req: Request, res: Response) => {
  let response = null;

  try {
    const params = req.query;

    const data = await charSvc.fetchCharacterByProps(params);
    response = successResponse({
      data,
      message: "success",
    });
  } catch (e) {
    console.error(e);

    response = failResponse({
      data: null,
      code: 500,
      message: `Internal Server Error`,
    });
  }

  res.send(response);
};
