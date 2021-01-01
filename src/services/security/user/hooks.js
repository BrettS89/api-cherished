import { duplicateEmail, encryptPassword } from './hooks/index.js';
import setToken from '../../../hooks/setToken.js';
import validate from '../../../hooks/validate.js';
import disallow from '../../../hooks/disallow.js';
import authenticate from '../../../hooks/authenticate.js';

export default {
  before: {
    all: [],
    create: [validate('service.security.user.action.create'), duplicateEmail, encryptPassword],
    find: [disallow],
    get: [disallow],
    patch: [authenticate, validate('service.security.user.action.update')],
    delete: [],
  },
  after: {
    all: [],
    create: [setToken],
    find: [],
    get: [],
    patch: [],
    delete: [],
  },
};
