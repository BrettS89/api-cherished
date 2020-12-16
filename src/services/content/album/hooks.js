import authenticate from '../../../hooks/authenticate.js';
import familyIdCheck from '../../../hooks/familyIdCheck.js'

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate, familyIdCheck],
    get: [],
    patch: [],
    delete: [],
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
