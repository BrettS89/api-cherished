import disallow from '../../../hooks/disallow.js';
import { authenticate } from '../../../hooks';

export default {
  before: {
    all: [],
    create: [],
    find: [authenticate],
    get: [authenticate],
    patch: [authenticate],
    delete: [authenticate],
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
