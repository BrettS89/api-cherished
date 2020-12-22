import disallow from '../../../hooks/disallow.js';
import authenticate from '../../../hooks/authenticate.js';

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate],
    get: [],
    patch: [disallow],
    delete: [disallow],
  },
  after: {
    all: [],
    create: [],
    find: [],
    get: [],
    patch: [],
    delete: [],
  },
};
