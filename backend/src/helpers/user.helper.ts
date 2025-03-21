import { TYPE } from "../types/types.js";
import { User, UserDocument } from "../models/user.model.js";
import { Types } from "mongoose";

export const insertUser = async (input: Partial<UserDocument>) => {
  return User.insertOne(input);
};

export const getUserByUsername = async (username: string) => {
  return User.findOne({ username }).lean();
};

export const countUserByUsername = async (username: string) => {
  return User.find({ username }).countDocuments().lean();
};

export const getUser = async (id?: string) => {
  let cond = {};

  if (id) cond = { _id: id };

  return User.findOne(cond).select("-password").lean();
};

export const updateUserRecord = async (
  record: Map<TYPE, number>,
  id: string,
) => {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        record,
      },
    },
    { new: true },
  )
    .select("_id name")
    .lean();
};

export const createAnonymousRecord = async (record: Map<TYPE, number>) => {
  return User.insertOne({
    name: "anonymous",
    age: 0,
    username: "guest-" + new Types.ObjectId(),
    password: null,
    record,
  });
};

export const countByRole = async (role: number) => {
  return User.countDocuments({ "record.ROLE": role });
};
