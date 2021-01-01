import { authenticate, disallow } from '../../../hooks';
import familyIdCheck from '../../../hooks/familyIdCheck.js'

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate, familyIdCheck],
    get: [disallow],
    patch: [authenticate],
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
