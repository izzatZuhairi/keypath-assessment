import mongoose, { Model, Schema, Types } from "mongoose";

export interface AnswerDocument {
  _id: Types.ObjectId;
  nextQ: {};
  type: string;
  answerValue: string;
  value: number;
  condition: {};
}

const AnswerSchema = new Schema<AnswerDocument>({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  nextQ: { type: Schema.Types.Mixed },
  type: { type: String },
  answerValue: { type: String },
  value: { type: Number },
  condition: { type: Schema.Types.Mixed },
});

interface AnswerModel extends Model<AnswerDocument> {}

export const Answer = mongoose.model<AnswerDocument, AnswerModel>(
  "answer",
  AnswerSchema,
);
