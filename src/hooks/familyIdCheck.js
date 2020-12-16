import throwError from '../utilities/throwError.js';

const familyIdCheck = req => {
  const { user } = req;

  // if (req.query.account_id === 'undefined') delete req.query.account_id;

  if (req.query.account_id) {
    if (Array.isArray(user.account_id)) {
      const stringIds = user.account_id.map(_id => _id.toString());
      if (!stringIds.includes(req.query.account_id)) {
        throwError(400, 'This account_id does not belong to you');
      }
    }

    if (user.account_id.toString() !== req.query.account_id) {
      throwError(400, 'This account_id does not belong to you');
    }
  } else if (req.body.account_id) {
    if (Array.isArray(user.account_id)) {
      const stringIds = user.account_id.map(_id => _id.toString());
      if (!stringIds.includes(req.body.account_id)) {
        throwError(400, 'This account_id does not belong to you');
      }
    }

    if (user.account_id.toString() !== req.body.account_id) {
      throwError(400, 'This account_id does not belong to you');
    }
  }

  return req;
};

export default familyIdCheck;
