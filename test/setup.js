// import mongoose from 'mongoose';
const mongoose = require('mongoose');
import 'regenerator-runtime/runtime';

// jest.setTimeout(100000);

afterAll(() => {
  return (async() => {
    const refresh = Object
    .values(mongoose.connection.collections ?? {})
    .map(async collection => await collection.deleteMany({}))

    await Promise.all(refresh);
    // await mongoose.disconnect();
    await mongoose.connection.close();
    return true;
  })()
});
