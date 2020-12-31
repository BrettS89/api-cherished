import jwt from 'jsonwebtoken';
import app from '../index.js';

import throwError from '../utilities/throwError.js';

const authenticate = async req => {
  let rawToken = null;
  let propertyToken = null;
  let functionToken = null;

  console.log('RAW', req.rawHeaders);
  console.log('REGULAR', req.headers);

  for (let i = 0; i < req.rawHeaders.length; i++) {
    if (req.rawHeaders[i] === 'authorization') {
      rawToken = req.rawHeaders[i + 1];
    }
  }

  try {
    propertyToken = req.headers['authorization'];
  } catch(e) {
    console.log('PROPERTY ERROR', e);
  }

  try {
    functionToken = req.header('authorization');
  } catch(e) {
    console.log('FUNCTION ERROR', e);
  }

  console.log(rawToken, propertyToken, functionToken);

  // const token = req.headers && req.headers['authorization'] 
  //   ? req.headers['authorization'] 
  //   : typeof req.header === 'function' 
  //     ? req.header('authorization') 
  //     : null;

  const finalToken = rawToken || propertyToken || functionToken;

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
