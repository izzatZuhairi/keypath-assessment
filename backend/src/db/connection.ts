import mongoose from "mongoose";

export const conn = async () => mongoose.connect(process.env.DB_URI);
