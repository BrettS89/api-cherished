import { authenticate, disallow } from '../../../hooks';
import familyIdCheck from '../../../hooks/familyIdCheck.js'

export default {
  before: {
    all: [],
    create: [authenticate],
    find: [authenticate],
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
