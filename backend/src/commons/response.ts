import type { Response } from "../types/types.js";

export const successResponse = (input: Response) => {
  return { data: input.data, statusCode: 200, message: input.message };
};

export const failResponse = (input: Response) => {
  return { data: input.data, statusCode: input.code, message: input.message };
};
