import { duplicateEmail, encryptPassword } from './hooks/index.js';
import { authenticate, disallow, setToken, validate } from '../../../hooks';

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
