import { authenticate, disallow, setToken } from '../../../hooks';

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
