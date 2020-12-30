import jwt from 'jsonwebtoken';
import app from '../index.js';

import throwError from '../utilities/throwError.js';

const authenticate = async req => {
  
  const token = req.headers && req.headers['authorization'] ? req.headers['authorization'] : req.header('authorization');

  if (!token) throwError(401, 'Unauthorized');

	try {
		jwt.verify(token, app.var('jwtSecret'));
	} catch (e) {

    const error = e.toString().split(' ')[2];

    if (error === 'signature') throwError(401, 'Unauthorized');
	}

	const decodedUser = jwt.decode(token);

  if (!decodedUser) throwError(401, 'Unauthorized');

  const user = await app.service('security/user').get(decodedUser._id);

  if (!user) throwError(401, 'Unauthorized');

  req.user = user;

	return req;
};

export default (authenticate);
