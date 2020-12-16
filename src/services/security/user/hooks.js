import { duplicateEmail, encryptPassword } from './hooks/index.js';
import setToken from '../../../hooks/setToken.js';

export default {
  before: {
    all: [],
    create: [duplicateEmail, encryptPassword],
    find: [],
    get: [],
    patch: [],
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
