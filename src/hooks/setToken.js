import jwt from 'jsonwebtoken';

export const setToken = ({ data }) => {
  let newData = { ...data };

  if (typeof data.toObject === 'function') {
    newData = data.toObject();
  }
  
  if (data._id) {
    newData.token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
  }

  return newData;
};
