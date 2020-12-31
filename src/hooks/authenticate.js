import jwt from 'jsonwebtoken';
import app from '../index.js';

import throwError from '../utilities/throwError.js';

const authenticate = async req => {
  let rawToken = null;

  for (let i = 0; i < req.rawHeaders.length; i++) {
    if (req.rawHeaders[i] === 'authorization') {
      rawToken = req.rawHeaders[i + 1];
    }
  }

  const token = req.headers && req.headers['authorization'] 
    ? req.headers['authorization'] 
    : typeof req.header === 'function' 
      ? req.header('authorization') 
      : null;

  console.log(token, rawToken);

  const finalToken = token || rawToken;

  if (!finalToken) throwError(401, 'Unauthorized');

	try {
		jwt.verify(finalToken, app.var('jwtSecret'));
	} catch (e) {

    const error = e.toString().split(' ')[2];
    console.log('eeee', error)
    if (error === 'signature') throwError(401, 'Unauthorized');
	}

	const decodedUser = jwt.decode(finalToken);
  console.log(decodedUser);
  if (!decodedUser) throwError(401, 'Unauthorized');
  
  const user = await app.service('security/user').get(decodedUser._id);
  console.log(user)
  if (!user) throwError(401, 'Unauthorized');

  req.user = user;

	return req;
};

export default (authenticate);
