import bcrypt from "bcryptjs";
import * as userHelper from "../helpers/user.helper.js";
import { UserDocument } from "../models/user.model.js";
import { signJwt } from "../utils/jwt.js";
import { TYPE } from "../types/types.js";

export const createUser = async (input: Partial<UserDocument>) => {
  const usernameCounts = await userHelper.countUserByUsername(input.username);

  if (usernameCounts > 0) throw new Error("username exists");

  const hashedPassword = await bcrypt.hash(input?.password, 12);

  const remappedInput: Partial<UserDocument> = {
    ...input,
    password: hashedPassword,
  };

  const newUser = await userHelper.insertUser(remappedInput);

  return {
    _id: newUser._id,
    username: newUser.username,
  };
};

export const listUser = async () => {
  return userHelper.getUser();
};

export const getUserById = async (id: string) => {
  return userHelper.getUser(id);
};

export const comparePassword = async (hashed: string, input: string) => {
  return bcrypt.compare(input, hashed);
};

export const signUser = async (user: Partial<UserDocument>) => {
  const access_token = signJwt(
    { sub: user._id },
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRE as unknown as number },
  );

  const refresh_token = signJwt(
    { sub: user._id },
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE as unknown as number,
    },
  );

  return { access_token, refresh_token };
};

export const login = async (username: string, password: string) => {
  const user = await userHelper.getUserByUsername(username);

  if (!user || !(await comparePassword(user.password, password))) {
    throw new Error("invalid credentials");
  }

  const { access_token } = await signUser(user);

  return { access_token, user: user._id.toString() };
};

export const addResult = async (record: Map<TYPE, number>, id?: string) => {
  if (id) return userHelper.updateUserRecord(record, id);

  return userHelper.createAnonymousRecord(record);
};

export const getTotalCount = async () => {
  const [damage, tank, support] = await Promise.all([
    userHelper.countByRole(1),
    userHelper.countByRole(2),
    userHelper.countByRole(3),
  ]);

  return {
    damage,
    tank,
    support,
  };
};
