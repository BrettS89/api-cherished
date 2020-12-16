import jwt from 'jsonwebtoken';

const setToken = data => {
  const newData = data.toObject();
  if (data._id) {
    newData.token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
  }

  return newData;
};

export default setToken;
