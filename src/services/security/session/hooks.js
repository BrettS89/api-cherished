import authenticate from '../../../hooks/authenticate.js';
import setToken from '../../../hooks/setToken.js';
import disallow from '../../../hooks/disallow.js';

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate],
    get: [],
    patch: [disallow],
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
