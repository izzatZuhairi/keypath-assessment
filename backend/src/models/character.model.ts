import mongoose, { Model, Schema, Types } from "mongoose";
import { TYPE } from "../types/types.js";

export interface CharDocument {
  _id: Types.ObjectId;
  name: string;
  description: string;
  props: Types.Map<TYPE>;
}

const CharSchema = new Schema<CharDocument>({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  name: { type: String },
  description: { type: String },
  props: { type: Schema.Types.Map },
});

interface CharModel extends Model<CharDocument> {}

export const Char = mongoose.model<CharDocument, CharModel>(
  "character",
  CharSchema,
);
