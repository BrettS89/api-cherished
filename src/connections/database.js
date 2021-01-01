import mongoose from 'mongoose';

export default () => {
  const uri = process.env.NODE_ENV === 'test'
    ? process.env.MONGO_TEST
    : process.env.MONGO_URI;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
