import disallow from '../../../hooks/disallow.js';
import authenticate from '../../../hooks/authenticate.js';

export default {
  before: {
    all: [],
    create: [authenticate],
    find: [disallow],
    get: [disallow],
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
