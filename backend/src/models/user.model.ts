import mongoose, { Model, Schema, Types } from "mongoose";

export interface UserDocument {
  _id: Types.ObjectId;
  name: string;
  age: number;
  username: string;
  password: string;
  record?: {};
}

const UserSchema = new Schema<UserDocument>({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  name: { type: String },
  age: { type: Number },
  username: { type: String, unique: true },
  password: { type: String },
  record: { type: Schema.Types.Mixed },
});

interface UserModel extends Model<UserDocument> {}

export const User = mongoose.model<UserDocument, UserModel>("user", UserSchema);
