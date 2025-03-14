import mongoose, { Model, Schema, Types } from "mongoose";

export interface QuestionDocument {
  _id: Types.ObjectId;
  value: string;
  type: string;
  level: number;
  answer: {};
  condition: {};
}

const QuestionSchema = new Schema<QuestionDocument>({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  value: { type: String },
  type: { type: String },
  level: { type: Number },
  answer: { type: Schema.Types.Mixed },
  condition: { type: Schema.Types.Mixed },
});

interface QuestionModel extends Model<QuestionDocument> {}

export const Question = mongoose.model<QuestionDocument, QuestionModel>(
  "question",
  QuestionSchema,
);
