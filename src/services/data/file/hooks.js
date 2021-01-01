import { authenticate, disallow } from '../../../hooks';

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
