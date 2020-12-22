import authenticate from '../../../hooks/authenticate.js';
import familyIdCheck from '../../../hooks/familyIdCheck.js'
import disallow from '../../../hooks/disallow.js';

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate, familyIdCheck],
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
