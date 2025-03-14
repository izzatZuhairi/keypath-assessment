import { Request, Response } from "express";
import { UserDocument } from "../models/user.model.js";

import * as userSvc from "../services/user.service.js";
import { failResponse, successResponse } from "../commons/response.js";

export const createUser = async (req: Request, res: Response) => {
  let response = null;

  try {
    const body = req.body as Partial<UserDocument>;

    const data = await userSvc.createUser(body);
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

export const fetchUserById = async (req: Request, res: Response) => {
  let response = null;

  try {
    const params = req.params;

    const data = await userSvc.getUserById(params.id);
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

export const listUser = async (_req: Request, res: Response) => {
  let response = null;

  try {
    const data = await userSvc.listUser();
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

export const login = async (req: Request, res: Response) => {
  let response = null;

  try {
    const body = req.body;

    const data = await userSvc.login(body.username, body.password);
    response = successResponse({
      data,
      message: "success",
    });
  } catch (e) {
    console.error(e);

    response = failResponse({
      data: null,
      code: 500,
      message: "Internal server error",
    });
  }

  res.send(response);
};
