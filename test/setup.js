import mongoose from 'mongoose';

afterAll(async (done) => {
  await mongoose.disconnect();
  await mongoose.connection.close();
  done();
});
