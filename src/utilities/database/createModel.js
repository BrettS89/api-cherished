import mongoose from 'mongoose';

export default (name, data) => {
  const schema = new mongoose.Schema(modelData, { timestamps: true });
  return mongoose.model(name, schema);
};
