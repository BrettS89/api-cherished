import jwt from 'jsonwebtoken';
import app from '../index.js';

import throwError from '../utilities/throwError.js';

const authenticate = async req => {
  let rawToken = null;

  for (let i = 0; i < req.rawHeaders.length; i++) {
    if (req.rawHeaders[i].toLowerCase() === 'authorization') {
      rawToken = req.rawHeaders[i + 1];
    }
  }

  const finalToken = rawToken;

  if (!finalToken) throwError(401, 'Unauthorized');

	try {
		jwt.verify(finalToken, app.var('jwtSecret'));
	} catch (e) {

    const error = e.toString().split(' ')[2];

    if (error === 'signature') throwError(401, 'Unauthorized');
	}

	const decodedUser = jwt.decode(finalToken);

  if (!decodedUser) throwError(401, 'Unauthorized');
  
  const user = await app.service('security/user').get(decodedUser._id);

  if (!user) throwError(401, 'Unauthorized');

  req.user = user;

	return req;
};

export default (authenticate);
