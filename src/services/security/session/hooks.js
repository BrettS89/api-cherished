import setToken from '../../../hooks/setToken.js';
import authenticate from '../../../hooks/authenticate.js';

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate],
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
