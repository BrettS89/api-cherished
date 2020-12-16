import bcrypt from 'bcryptjs';
import app from '../../../../index.js';
import throwError from '../../../../utilities/throwError.js';

export const encryptPassword = req => {
  if (req.body.password) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
  }

  return req;
};

export const duplicateEmail = async req => {
  if (req.body.email) {
    const user = await app.service('security/user')
      .find({ query: { email: req.body.email }});

    if (user.length) {
      throwError(400, 'There is already an account associated with this email');
    }
  }
  return req;
};
